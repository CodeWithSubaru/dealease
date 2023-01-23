<template>
    <main>
        <Banner>
            <template #banner-username>
                <LightDarkMode
                    :switchColor="switchColor"
                    :lightMode="lightMode"
                />
            </template>
        </Banner>

        <Card class="card">
            <h1>Register</h1>
            <div class="login-description">
                <p class="login-details">Please login your credentials</p>
                <slot name="login-img" />
            </div>

            <form class="form">
                <FormGroup>
                    <template #label>Name </template>
                    <template #input>
                        <input
                            type="text"
                            name="name"
                            v-model="form.name"
                            required
                        />
                    </template>
                </FormGroup>
                <small class="errMsg" ref="errMsg" v-if="errors.name">
                    {{ errors.name[0] }}
                </small>

                <FormGroup>
                    <template #label>Email </template>
                    <template #input>
                        <input
                            type="email"
                            name="email"
                            v-model="form.email"
                            required
                        />
                    </template>
                </FormGroup>
                <small class="errMsg" ref="errMsg" v-if="errors.email">
                    {{ errors.email[0] }}
                </small>

                <FormGroup>
                    <template #label>Password </template>
                    <template #input>
                        <input
                            type="password"
                            name="password"
                            v-model="form.password"
                            required
                        />
                    </template>
                </FormGroup>

                <small class="errMsg" ref="errMsg" v-if="errors.password">
                    {{ errors.password[0] }}
                </small>

                <FormGroup class="mb-2">
                    <template #label>Confirm Password </template>
                    <template #input>
                        <input
                            type="password"
                            name="password_confirmation"
                            v-model="form.password_confirmation"
                            required
                        />
                    </template>
                </FormGroup>

                <form-group>
                    <template #label>Region</template>
                    <template #input>
                        <select
                            id="region"
                            v-model="form.selected.region"
                            @change="province(form.selected.region)"
                        >
                            <option :selected="true">Choose Region</option>
                            <option
                                v-for="region in form.address.regions"
                                :key="region.id"
                                :value="region.region_code"
                            >
                                {{ region.region_name }}
                            </option>
                        </select>
                        <span class="material-symbols-rounded expand_more">
                            expand_more
                        </span>
                    </template>
                </form-group>

                <form-group>
                    <template #label>Province</template>
                    <template #input>
                        <select
                            id="province"
                            v-model="form.selected.province"
                            @change="city(form.selected.province)"
                        >
                            <option
                                v-for="province in form.address.provinces"
                                :value="province.province_code"
                                :key="province.id"
                            >
                                {{ province.province_name }}
                            </option>
                        </select>
                        <span class="material-symbols-rounded expand_more">
                            expand_more
                        </span>
                    </template>
                </form-group>

                <form-group>
                    <template #label>City/Town</template>
                    <template #input>
                        <select
                            id="city"
                            v-model="form.selected.city"
                            @change="brgy(form.selected.city)"
                        >
                            <option :selected="true">
                                {{ form.selected.city }}
                            </option>
                            <option
                                v-for="city in form.address.cities"
                                :value="city.city_name"
                                :key="city.id"
                            >
                                {{ city.city_name }}
                            </option>
                        </select>
                        <span class="material-symbols-rounded expand_more">
                            expand_more
                        </span>
                    </template>
                </form-group>

                <form-group>
                    <template #label>Baranggay</template>
                </form-group>

                <form-group>
                    <template #label>Street number</template>
                </form-group>

                <Button
                    class="mb-2 login-button btn"
                    ref="btn"
                    @click.prevent="register"
                >
                    <p>
                        <span v-if="!isClicked"> Register </span>
                        <span v-else>
                            <span class="material-symbols-rounded spin">
                                autorenew
                            </span>
                            Processing
                        </span>
                    </p>
                </Button>

                <div class="back-to-home-wrapper">
                    <router-link to="/login" class="back-to-home">
                        Go to Login
                    </router-link>
                </div>
            </form>
        </Card>
    </main>
</template>
<script>
import Banner from "@/components/Banner.vue";
import Card from "@/components/Card.vue";
import FormGroup from "@/components/FormGroup.vue";
import Button from "@/components/Button.vue";
import LightDarkMode from "@/components/LightDarkMode.vue";
import Address from "select-philippines-address";

export default {
    components: { Banner, Card, FormGroup, Button, LightDarkMode },
    data() {
        return {
            form: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
                address: {
                    regions: {},
                    provinces: {},
                    cities: {},
                },
                selected: {
                    region: "Choose Region",
                    province: "",
                    city: "",
                    brgy: "",
                },
            },

            isClicked: false,
            lightMode: false,
            errors: [],
        };
    },

    beforeMount() {
        Address.regions().then((region) => {
            this.form.address.regions = region;
        });
    },

    methods: {
        province(region) {
            Address.provinces(region).then((province) => {
                this.form.address.provinces = province;
                this.form.selected.province = "Choose Province";
                this.form.selected.city = "Choose Province first";
            });
        },

        city(province) {
            Address.cities(province).then(
                (city) => (this.form.address.cities = city)
            );
        },

        brgy(city) {
            consoloe.log(city);
        },

        register() {
            this.isClicked = true;
            setTimeout(() => {
                this.isClicked = false;
                axios
                    .post("/api/register", this.form)
                    .then((resp) => {
                        this.$router.push({
                            name: "LoginUser",
                            params: {
                                message: JSON.stringify(resp),
                            },
                        });
                    })
                    .catch((e) => {
                        this.errors = e.response.data.errors;

                        setTimeout(() => {
                            this.errors.email = null;
                            this.errors.password = null;
                        }, 3000);
                    });
            }, 500);
        },

        switchColor() {
            this.lightMode = !this.lightMode;
            document.querySelector(".mode").classList.add("spinOneTime");
            setTimeout(() => {
                document.querySelector(".mode").classList.remove("spinOneTime");
            }, 800);
        },
    },
};
</script>

<style scoped>
:deep(.banner) {
    position: sticky;
    margin-bottom: 2rem;
    width: 100%;
}

main {
    height: 100vh;
}

section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    padding: 0 0.6rem;
}

.card {
    border-radius: 14px;
    padding: 2rem;
    width: 500px;
    margin: 0.4rem auto;
}

.login-details {
    color: rgba(236, 236, 240, 0.3);
}

.login-description {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form .form-group input:not(.remember_me),
.form .form-group select {
    display: block;
    width: 100%;
    padding: 0.8rem 1.4rem;
    border-radius: 14px;
    outline: 0;
    border: none;
    background: rgba(236, 236, 240, 0.1);
    color: #fff;
}

.form .form-group select {
    appearance: none;
}

.form .form-group select > option {
    color: #888;
    font-size: 16px;
}

.form .form-group select ~ .expand_more {
    float: right;
    clear: both;
    position: relative;
    right: 10px;
    top: -30px;
    font-size: 20px;
}

.remember_me-wrapper {
    display: flex;
    align-items: center;
}

.remember_me-wrapper .remember_me {
    appearance: none;
    border-radius: 6px;
    font-weight: 900;
    padding: 0.6rem;
    height: 1rem;
    width: 1rem;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    order: -1;
    margin-right: 0.8rem;
    background: rgba(236, 236, 240, 0.1);
    font-size: 0.8rem;
}

.remember_me-wrapper .remember_me::after {
    content: "🗸";
    color: #fff;
    display: none;
}
.remember_me-wrapper .remember_me:hover {
    background: rgba(236, 236, 240, 0.1);
}
.remember_me-wrapper .remember_me:checked {
    background: #efa726;
}
.remember_me-wrapper .remember_me:checked:after {
    display: inline-block;
}

.login-button {
    padding: 0.8rem 1.4rem;
    font-size: 0.8rem;
    background: #efa726;
    color: #fff;
}

.login-button p,
.login-button p span {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.2rem;
}

.login-button:hover {
    background: #d69215;
}

.back-to-home-wrapper {
    display: flex;
    justify-content: flex-end;
}

.back-to-home {
    color: rgba(236, 236, 240, 0.3);
    text-decoration: none;
    font-size: 0.8rem;
}
</style>
