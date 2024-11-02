<script setup lang="tsx">
import { ref, watch } from 'vue'
import chevronLeft from "../assets/images/icons/chevron left.svg?url";
import checronRight from "../assets/images/icons/chevron_right.svg?url";

const itemsWrapper = ref<HTMLElement>();
const currentIndex = defineModel<number>()

watch(currentIndex, () => {
    if (currentIndex.value === undefined) {
        return;
    }

    const wrapper = itemsWrapper.value?.firstElementChild;

    const element = wrapper?.children[currentIndex.value]

    if (!element) {
        currentIndex.value = 0;
        return;
    }

    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
    })
})

// onMounted(() => {
//     setInterval(() => {
//         currentIndex.value ??= 0;
//         currentIndex.value++;
//     }, 3000)
// })
</script>

<template>
    <div class="flex items-center g gap-2">
        <button class="bg-primary pa-2 rounded" @click="currentIndex--">
            <img class="w-3 h-3" :src="chevronLeft" alt="">
        </button>
        <div class="overflow-x-auto max-w-full flex items-center flex-1">

            <div ref="itemsWrapper" class="flex w-max ma-auto">
                <slot></slot>
            </div>
        </div>
        <button class="bg-primary pa-2 rounded" @click="currentIndex++">
            <img class="w-3 h-3" :src="checronRight" alt="">
        </button>
    </div>
</template>

<style>
::-webkit-scrollbar {
    display: none;
}
</style>