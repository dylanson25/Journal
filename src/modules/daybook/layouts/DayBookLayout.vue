<template>
    <NavbarComponent />
    <div v-if="isLoading" class="row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-5">
            Espere por favor...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>
    <div v-else class="d-flex">
        <div class="col-4">
            <EntryListComponent />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'
import {mapActions, mapState} from 'vuex'

export default {
    components: {
        NavbarComponent: defineAsyncComponent(()=> import('../components/Navbar-component.vue')),
        EntryListComponent: defineAsyncComponent(()=>import('../components/EntryList-component.vue'))
    },
    methods:{
        ...mapActions('journal',['loadEntries']),
    },
    computed:{
        ...mapState('journal', ['isLoading'])

    },
    created() {
        this.loadEntries()
    }
}
</script>
