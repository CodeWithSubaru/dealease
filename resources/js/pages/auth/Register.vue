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
            <div class="register-description mb-1">
                <p class="register-details">Please provide your details</p>
                <Card class="card register-note">
                    <span class="material-symbols-rounded bulb">
                        tips_and_updates
                    </span>
                    <ul>
                        <h4>Take Note:</h4>
                        <li>All fields with asterisk (*) are required</li>
                    </ul>
                </Card>
                <slot name="login-img" />
            </div>

            <form class="form">
                <div class="form-top">
                    <div class="personal-details">
                        <h3>Personal Details</h3>
                        <hr />
                        <FormGroup>
                            <template #label> First Name * </template>
                            <template #input>
                                <input
                                    type="text"
                                    name="name"
                                    v-model="form.name.first_name"
                                    required
                                />
                            </template>
                        </FormGroup>

                        <FormGroup>
                            <template #label> Middle Name * </template>
                            <template #input>
                                <input
                                    type="text"
                                    name="name"
                                    v-model="form.name.mid_name"
                                    required
                                />
                            </template>
                        </FormGroup>

                        <FormGroup>
                            <template #label> Last Name * </template>
                            <template #input>
                                <input
                                    type="text"
                                    name="name"
                                    v-model="form.name.last_name"
                                    required
                                />
                            </template>
                        </FormGroup>

                        <FormGroup>
                            <template #label> Extension Name </template>
                            <template #input>
                                <input
                                    type="text"
                                    name="name"
                                    v-model="form.name.ext_name"
                                    required
                                />
                            </template>
                        </FormGroup>

                        <FormGroup>
                            <template #label> Birthday </template>
                            <template #input>
                                <input type="text" name="" id="" />
                            </template>
                        </FormGroup>

                        <FormGroup class="mb-1">
                            <template #label> Contact Number </template>
                            <template #input>
                                <input type="text" name="" id="" />
                            </template>
                        </FormGroup>
                    </div>

                    <div class="address-details">
                        <h3>Address Details</h3>
                        <hr />
                        <FormGroup>
                            <template #label>Region</template>
                            <template #input>
                                <select
                                    id="region"
                                    v-model="form.selected.region"
                                    @change="province(form.selected.region)"
                                >
                                    <option :selected="true">
                                        Choose Region
                                    </option>
                                    <option
                                        v-for="region in form.address.regions"
                                        :value="region.region_code"
                                        :key="region.id"
                                    >
                                        {{ region.region_name }}
                                    </option>
                                </select>
                                <span
                                    class="material-symbols-rounded expand_more"
                                >
                                    expand_more
                                </span>
                            </template>
                        </FormGroup>

                        <FormGroup>
                            <template #label>Province</template>
                            <template #input>
                                <select
                                    id="province"
                                    v-model="form.selected.province"
                                    @change="city(form.selected.province)"
                                >
                                    <option :selected="true">
                                        {{ form.selected.province }}
                                    </option>
                                    <option
                                        v-for="province in form.address
                                            .provinces"
                                        :value="province"
                                        :key="province.id"
                                    >
                                        {{ province.province_name }}
                                    </option>
                                </select>
                                <span
                                    class="material-symbols-rounded expand_more"
                                >
                                    expand_more
                                </span>
                            </template>
                        </FormGroup>

                        <FormGroup>
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
                                        :value="city"
                                        :key="city.id"
                                    >
                                        {{ city.city_name }}
                                    </option>
                                </select>
                                <span
                                    class="material-symbols-rounded expand_more"
                                >
                                    expand_more
                                </span>
                            </template>
                        </FormGroup>

                        <FormGroup>
                            <template #label>Baranggay</template>
                            <template #input>
                                <select
                                    id="baranggay"
                                    v-model="form.selected.baranggay"
                                >
                                    <option :selected="true">
                                        {{ form.selected.baranggay }}
                                    </option>
                                    <option
                                        v-for="baranggay in form.address
                                            .baranggays"
                                        :value="baranggay.brgy_name"
                                        :key="baranggay.id"
                                    >
                                        {{ baranggay.brgy_name }}
                                    </option>
                                </select>
                                <span
                                    class="material-symbols-rounded expand_more"
                                >
                                    expand_more
                                </span>
                            </template>
                        </FormGroup>

                        <FormGroup class="mb-2">
                            <template #label> Street Name </template>
                            <template #input>
                                <input type="text" name="" id="" />
                            </template>
                        </FormGroup>
                    </div>
                </div>

                <div class="form-bottom">
                    <div class="account-details">
                        <h3>Account Details</h3>
                        <hr />
                        <FormGroup>
                            <template #label> Email * </template>
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
                            <template #label>Password * </template>
                            <template #input>
                                <input
                                    type="password"
                                    name="password"
                                    v-model="form.password"
                                    required
                                />
                            </template>
                        </FormGroup>

                        <small
                            class="errMsg"
                            ref="errMsg"
                            v-if="errors.password"
                        >
                            {{ errors.password[0] }}
                        </small>

                        <FormGroup class="mb-1">
                            <template #label>Confirm Password * </template>
                            <template #input>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    v-model="form.password_confirmation"
                                    required
                                />
                            </template>
                        </FormGroup>
                    </div>
                </div>

                <Button
                    class="mb-2 register-button btn"
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
                name: {
                    first_name: null,
                    mid_name: null,
                    last_name: null,
                    ext_name: null,
                },
                email: null,
                password: null,
                password_confirmation: null,
                address: {
                    regions: {},
                    provinces: {},
                    cities: {},
                    baranggays: {},
                },
                selected: {
                    region: "Choose Region",
                    province: "Choose Region First",
                    city: "Choose Region First",
                    baranggay: "Choose Region First",
                },
            },

            isClicked: false,
            lightMode: false,
            errors: {},
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
                this.form.selected.baranggay = "Choose Province first";
            });
        },

        city(province) {
            this.form.selected.province = province.province_name;
            Address.cities(province.province_code).then((city) => {
                this.form.address.cities = city;
                this.form.selected.city = "Choose City";
                this.form.selected.baranggay = "Choose City first";
            });
        },

        brgy(city) {
            this.form.selected.city = city.city_name;
            Address.barangays(city.city_code).then((baranggay) => {
                this.form.address.baranggays = baranggay;
                this.form.selected.baranggay = "Choose Baranggay";
            });
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
    width: 850px;
    margin: 0.4rem auto;
}

.register-description {
    display: flex;
    flex-direction: column;
}

.account-details,
.personal-details {
    flex: 1;
}
.register-details {
    color: rgba(236, 236, 240, 0.3);
}

.register-note {
    background: rgba(239, 169, 38, 0.7);
    padding: 1.5rem 2rem;
    width: 100%;
    display: flex;
    column-gap: 2rem;
}

.register-note .bulb {
    display: flex;
    font-size: 1.4rem;
    margin-top: 0.3rem;
}

.register-note ul h4 {
    margin-left: -1.2rem;
    margin-bottom: 0.5rem;
}

.form h3 {
    margin-bottom: 5px;
}
.form hr {
    height: 2px;
    background: #999;
    border: none;
}

.form .form-top {
    display: flex;
    column-gap: 2rem;
    margin-bottom: 1rem;
}

.form .account-details,
.form .address-details {
    flex: 1;
}

.form .form-bottom {
    display: flex;
    margin: 0 auto;
    margin-bottom: 1.5rem;
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

.register-button {
    padding: 0.8rem 1.4rem;
    font-size: 0.8rem;
    background: #efa726;
    color: #fff;
}

.register-button p,
.register-button p span {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.2rem;
}

.register-button:hover {
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
