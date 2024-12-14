<script setup lang="ts">

import type { City } from '~/interfaces';

/**
 * ====================================================
 * =============================   useAsyncData() で記述
 * ====================================================
 */

// ルートオブジェクト
const route = useRoute();

const cityList = useState<Map<number, City>>("cityList");

// 選択された、IDをもとに、該当情報を取得
const selectedCity = computed (
    (): City => {
        const idNo = Number(route.params.id);
        return cityList.value.get(idNo) as City;
    }
);

// テンプレート変数
const weatherDescription = ref("");

const asyncData = await useAsyncData(
    `/WeatherInfo/${route.params.id}`,
    (): Promise<any> => {
        const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
        const params: {
            lang: string;
            q:string;
            appid: string;
        } =
        {
            lang: "ja",
            q: selectedCity.value.q,
            // API キー
            appid: "16614bcc2ccc6a261b0ca7b10b2fb193"
        }

        // クエリパラメーター
        const queryParams = new URLSearchParams(params);
        // 実際アクセスするURLを生成
        const urlFull = `${weatherInfoUrl}?${queryParams}`;
        // URLを非同期で、アクセスしてデータを取得
        const response = $fetch(urlFull);

        return response;

    }
);

// ********* 天気データ取得 ********
const data = asyncData.data;
const weatherArray = data.value.weather;
const weather = weatherArray[0];
weatherDescription.value = weather.description;


 
</script>

<template>
    <section>
        <h2>{{ selectedCity.name }}の天気</h2>
        <p>{{ weatherDescription }}</p>
    </section>

    <p>リストに <NuxtLink v-bind:to="{name: 'index'}">戻る</NuxtLink></p>
</template>