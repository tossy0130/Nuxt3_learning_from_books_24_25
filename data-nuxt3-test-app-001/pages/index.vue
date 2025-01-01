<script setup lang="ts">

import type {City} from "@/interfaces";
import { stringifyQuery } from "vue-router";

// 都市情報リスト取得
const cityList = useState<Map<number, City>>("cityList");

// デフォルト都市情報   
const selectedCityId = ref(1853909)

const asyncData = await useAsyncData(
    (): Promise<any> => {
        const selectedCity = cityList.value.get(selectedCityId.value) as City;
        const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
        const params: {
            lang: string;
            q: string;
            appid: string;
        } = 
        {
            lang: "ja",
            q:selectedCity.q,
            // API キー
            appid: "16614bcc2ccc6a261b0ca7b10b2fb193"
        }

        const queryParams = new URLSearchParams(params);
        const urlFull = `${weatherInfoUrl}?${queryParams}`;

        // フェッチ
        const response = $fetch(urlFull);
        return response;

    },

    {
        transform: (data: any): WeatherInfoData => {
            const weatherArray = data.weather;
            const weather = weatherArray[0];
            return {
                cityName: `${data.name}の天気`,
                description: weather.description
            };
        },
        watch: [selectedCityId]
    }
);

const pending = asyncData.pending;
const data = asyncData.data;

</script>

<template>
    <section>
        <h2>都市リスト</h2>
        <ul>
            <li v-for="[id, city] in cityList"
            v-bind:key="id">
            
            <NuxtLink v-bind:to="{name: 'WeatherInfo-id', params: {id:id}}">
                {{ city.name }} の天気
            </NuxtLink>

            </li>
        </ul>
    </section>
</template>