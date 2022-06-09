<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
      </div>

      <div>
        <input
          v-show="false"
          accept="image/png, image/jpeg"
          type="file"
          @change="onSelectedImage"
          ref="imageSelector"
        />
        <button
          v-if="entry.id"
          @click="onDeleteEntry"
          class="btn btn-danger mx-2"
        >
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary" @click="onSelectImage">
          Subir foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>
    <hr />
    <div class="d-flex flex-column px-3 h-75">
      <textarea v-model="entry.text" placeholder="¿Que sucedió hoy?"></textarea>
    </div>
    <img
      v-if="localImage"
      :src="localImage"
      alt="imagen vue"
      class="img-thumbnail"
    />
    <img
      v-if="entry.picture && !localImage"
      :src="entry.picture"
      alt="imagen vue"
      class="img-thumbnail"
    />
  </template>
  <FabComponent icon="fa-save" @on:click="saveEntry" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";

import getDayMonthYear from "../helpers/getDayMonthYear";
import uploadImage from "../helpers/uploadImage";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    FabComponent: defineAsyncComponent(() =>
      import("../components/Fab-Component.vue")
    ),
  },
  data() {
    return {
      entry: null,
      localImage: null,
      file: null,
    };
  },
  computed: {
    ...mapGetters("journal", ["getEntriesById"]),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    },
  },
  methods: {
    ...mapActions("journal", ["updateEntry", "createEntry", "deleteEntry"]),
    loadEntry() {
      let entry;
      if (this.id === "new") {
        entry = {
          text: "",
          date: new Date().getTime(),
        };
      } else {
        entry = this.getEntriesById(this.id);
        if (!entry) this.$router.push({ name: "no-entry" });
      }
      this.entry = entry;
    },
    async saveEntry() {
      new Swal({
        title: "Espere porfavor",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      const picture = await uploadImage(this.file);
      this.entry.picture = picture;
      this.entry.id
        ? await this.updateEntry(this.entry)
        : this.createEntry(this.entry).then((name) => {
            this.$router.push({ name: "entry", params: { id: name } });
          });
      this.file = null;
      Swal.fire("Guardado", "Entrada registrada con exito", "success");
    },
    async onDeleteEntry() {
      const { isConfirmed } = await Swal.fire({
        title: "¿Estas seguro?",
        text: "Una vez borrado no se puede recuperar",
        showDenyButton: true,
        confirmButtonText: "Si, estoy seguro",
      });
      if (isConfirmed) {
        new Swal({
          title: "Espere porfavor",
          allowOutsideClick: false,
        });
        Swal.showLoading();

        await this.deleteEntry(this.entry.id);
        this.$router.push({ name: "no-entry" });
        Swal.fire("Eliminado", "", "success");
      }
    },
    onSelectedImage(event) {
      const file = event.target.files[0];
      if (!file) {
        this.localImage = null;
        this.file = null;
        return;
      }
      this.file = file;
      const fr = new FileReader();
      fr.onload = () => (this.localImage = fr.result);
      fr.readAsDataURL(file);
    },
    onSelectImage() {
      this.$refs.imageSelector.click();
    },
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang='scss' scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>