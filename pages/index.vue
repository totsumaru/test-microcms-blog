<template>
  <h1 class="text-center font-sans text-4xl font-semibold"><a href="/">テストBlog</a></h1>

  <!-- 検索 -->
  <div id="form" class="w-full max-w-xs">
    <form @submit.prevent="search" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="query">
          検索したい文字列
        </label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="query"
            type="text"
            v-model="query"
            placeholder="文字列"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
        >
          検索
        </button>
      </div>
    </form>
  </div>

  <ul class="mt-16 grid grid-cols-1 gap-8">
    <li v-for="blog in data?.contents" :key="blog.id">
      <NuxtLink
          :to="`/${blog.id}`"
          class="flex flex-col gap-4 sm:transition-shadow sm:hover:shadow md:flex-row md:items-center lg:gap-6"
      >
        <img
            :src="blog.eyecatch?.url"
            :width="blog.eyecatch?.width"
            :height="blog.eyecatch?.height"
            class="md:w-1/3 md:flex-none"
            alt=""
        />
        <div class="md:p-2.5 md:pr-0">
          <div
              class="inline-block rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600"
          >
            {{ blog.category?.name }}
          </div>
          <div class="mt-2 text-lg font-semibold md:text-xl">
            {{ blog.title }}
          </div>
          <div class="mt-1 text-sm text-gray-700">
            {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<!--<script setup lang="ts">-->
<!--import {Blog} from '../.nuxt/types/Blog';-->

<!--const {data} = await useMicroCMSGetList<Blog>({-->
<!--  endpoint: "blogs",-->
<!--});-->

<!--</script>-->


<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {Blog} from '../.nuxt/types/Blog';

const query = ref('');
const router = useRouter();

const search = () => {
  router.push({name: 'search', query: {q: query.value}});
}

const {data} = await useMicroCMSGetList<Blog>({endpoint: "blogs"});

</script>
