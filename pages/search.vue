<template>
  <!-- タイトル -->
  <h1 class="text-center font-sans text-4xl font-semibold"><a href="/">テストBlog</a></h1>

  <!-- 一覧表示 -->
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

<script setup lang="ts">
import {Blog} from '../.nuxt/types/Blog';
import {useRoute} from 'vue-router';

console.log(process.env.MICROCMS_API_KEY)

const route = useRoute();

// クエリパラメータへのアクセス
let param: any = route.query.q;

const queries = reactive({
  q: typeof param === 'string' ? param : undefined,
});

const {data} = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
  queries: queries,
});

// -----------
const axios = require('axios')

let args = {
  content: "hello" + process.env.MICROCMS_API_KEY,
  headers: {"Content-Type": "application/json"}
}

axios.post("https://discord.com/api/webhooks/1124948470361509898/ALSLotW0vi92uwwi4jiqkdjjooJIdHVUG12W3mJtsjZfy4gsArV0X93fmGHHZbwFBHrg", args)
    .then(function (response: any) {
      console.log("1")
    })
    .catch(function (error: any) {
      console.log("2", error)
    })
    .then(function () {
      console.log("*** 終了 ***")
    })
</script>
