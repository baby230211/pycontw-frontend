<template>
    <div
        class="publicTransporter flex flex-col rounded-xl bg-primary-900 px-6 py-10"
    >
        <div class="md:flex md:gap-10">
            <div class="md:flex md:flex-1 md:flex-col">
                <div class="flex items-center pb-3 pt-6">
                    <img :src="icon.taxiWhite" />
                    <h5 class="whitespace-nowrap pl-2">
                        {{ $t('publicTransport.taxi.title') }}
                    </h5>
                </div>
                <p>
                    {{ $t('publicTransport.taxi.description') }}
                </p>
            </div>
            <div class="md:flex md:flex-1 md:flex-col">
                <div class="flex items-center pb-3 pt-6">
                    <img :src="icon.uBike" />
                </div>
                <!-- TODO: use vue-i18n interpolation to do -->
                <p>
                    {{ $t('publicTransport.uBike.description1') }}
                    <br />
                    {{ $t('publicTransport.uBike.description2') }}
                </p>
            </div>
        </div>

        <div class="publicTransporter-trafficInfo pt-6">
            <div class="publicTransporter-trafficInfo-container flex-1">
                <h3>
                    <img class="mr-1" :src="icon.airplane" />
                    桃園國際機場交通資訊
                </h3>
            </div>
        </div>
        <div class="md:flex md:gap-10">
            <div>
                <div class="flex items-center pb-3 pt-6 md:pb-4">
                    <img :src="icon.carWhite" />
                    <h5 class="pl-2">
                        {{ $t('driveInfo.title') }}
                    </h5>
                </div>
                <div>
                    <ul class="ml-[19px] list-outside list-disc">
                        <li>
                            {{ $t('driveInfo.description1') }}
                        </li>
                        <li>
                            {{ $t('driveInfo.description2') }}
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div class="flex items-center pb-3 pt-6 md:pb-4">
                    <img :src="icon.transporterWhite" />
                    <h5 class="pl-2">
                        {{ $t('publicTransportInfo.title') }}
                    </h5>
                </div>
                <p>
                    {{ $t('publicTransportInfo.info') }}
                </p>
                <div>
                    <span>
                        {{ $t('publicTransportInfo.1843infoTitle') }}
                    </span>
                    <ul class="ml-[19px] list-outside list-disc">
                        <li>
                            {{ $t('publicTransportInfo.description1') }}
                        </li>
                        <li>
                            {{ $t('publicTransportInfo.description2') }}
                        </li>
                        <li>
                            {{ $t('publicTransportInfo.description3') }}
                        </li>
                        <li>
                            {{ $t('publicTransportInfo.description4') }}
                        </li>
                        <li>
                            {{ $t('publicTransportInfo.description5') }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import i18n from '@/i18n/venue/index.i18n'

export default {
    i18n,
    name: 'VenuePublicTransporterTab',
    data() {
        return {
            icon: {
                carWhite: require('~/static/img/venue/car-white.svg'),
                taxiWhite: require('~/static/img/venue/taxi-white.svg'),
                transporterWhite: require('~/static/img/venue/transporter-white.svg'),
                uBike: require('~/static/img/venue/uBike.svg'),
                parking: require('~/static/img/venue/parking.svg'),
                airplane: require('~/static/img/venue/airplane.svg'),
            },
        }
    },
}
</script>

<style lang="postcss" scoped>
.publicTransporter {
    & >>> ul {
        padding-left: 0px;
    }
}
.publicTransporter-trafficInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    color: #9387ff;
    & >>> h3 {
        padding: 0 14px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &::before {
            position: absolute;
            content: '';
            left: 0;
            border: 4px solid #9387ff;
            display: inline-block;
            border-radius: 50%;
        }
        &::after {
            position: absolute;
            content: '';
            right: 0;
            border: 4px solid #9387ff;
            display: inline-block;
            border-radius: 50%;
        }
        margin: 0;
    }
    &::before {
        max-width: 336px;
        content: '';
        width: 100%;
        border-top: 1px solid #9387ff;
        display: inline-block;
    }
    &::after {
        max-width: 336px;
        width: 100%;
        content: '';
        border-top: 1px solid #9387ff;
        display: inline-block;
    }
}
</style>
