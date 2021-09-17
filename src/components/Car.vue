<template>
    <b-container id="home-content" class="mx-0 py-3">
        <b-row
            class="car-info d-flex justify-content-center my-auto"
        >
            <b-col class="col-12 col-xl-4 pb-2">
                <div class="car-summary h-100">
                    <div class="car-header">
                        <h2 class="car-header-text m-0">
                            {{ car.modelYear }} {{ car.make }} {{ car.model }}
                        </h2>
                    </div>
                    <div>
                        <p class="fw-bold">
                            {{ car.description }}
                        </p>
                    </div>
                    <div
                        class="stats d-flex justify-content-between"
                    >
                        <div
                            v-for="(stat, statisticIndex) in car.statistics"
                            :key="`stat-${statisticIndex}`"
                        >
                            <h4>{{ stat.text }}</h4>
                            <div
                                class="d-flex justify-content-center"
                            >
                                <span class="fw-bold">{{ stat.value }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </b-col>
            <b-col class="col-12 col-xl-4 text-center">
                <div class="car-image">
                    <b-img
                        :src="car.image"
                        fluid
                        alt="2021 Ford Mustang"
                    ></b-img>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            car: {
                make: 'Ford',
                model: 'Mustang',
                modelYear: '2021',
                description: 'Mustang performs on a straight line with an available 11-second quarter mile. And it brings the same mastery around the edges, especially in the Mustang Mach 1, the fastest lateral 5.0L Mustang to date. The dialed-in suspension, braking systems, MagneRide® Damping System and tire packages available in this engineering marvel ensure responsive handling and an absolute thrill on the track.',
                statistics: {
                    price: { 
                        text: 'Starting at',
                        value: '$27,205',
                    },
                    mpg: { 
                        text: 'EPA-Est. MPG City/Hwy',
                        value: '21/30',
                    },
                    seats: { 
                        text: 'Seating for',
                        value: '4',
                    },
                },
                image: require('../assets/mustang.webp'),
            },
        };
    },
};
</script>

<style lang="scss">
#home-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: none;
    min-width: 100%;
    background: rgb(249, 249, 249);

    .car-summary {
        border-radius: 2em;

        > div {
            padding: 1.75em;
        }
        .car-header {
            background-color: #0276b3;
            .car-header-text {
                color: #fff;
            }
        }
        .stats {
            background-color: #e9e9e9;
            h3 {
                text-transform: capitalize;
            }
        }
    }

    .car-image img {
        animation: fadeIn 4s;
        -webkit-animation: fadeIn 4s;
        -moz-animation: fadeIn 4s;
        -o-animation: fadeIn 4s;
        -ms-animation: fadeIn 4s;
    }

    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
}
</style>
