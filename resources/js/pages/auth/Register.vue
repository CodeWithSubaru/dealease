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
                                    v-model="form.first_name"
                                    required
                                />
                            </template>
                        </FormGroup>
                        <small
                            class="errMsg"
                            ref="errMsg"
                            v-if="errors.first_name"
                        >
                            {{ errors.first_name[0] }}
                        </small>

                        <FormGroup>
                            <template #label> Middle Name * </template>
                            <template #input>
                                <input
                                    type="text"
                                    name="name"
                                    v-model="form.mid_name"
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
                                    v-model="form.last_name"
                                    required
                                />
                            </template>
                        </FormGroup>
                        <small
                            class="errMsg"
                            ref="errMsg"
                            v-if="errors.last_name"
                        >
                            {{ errors.last_name[0] }}
                        </small>

                        <FormGroup>
                            <template #label> Extension Name </template>
                            <template #input>
                                <input
                                    type="text"
                                    name="name"
                                    v-model="form.ext_name"
                                    required
                                />
                            </template>
                        </FormGroup>

                        <FormGroup>
                            <template #label> Birthday </template>
                            <template #input>
                                <input
                                    type="date"
                                    min="1930-01-01"
                                    max="2012-12-31"
                                    v-model="form.birthday"
                                />
                            </template>
                        </FormGroup>
                        <small
                            class="errMsg"
                            ref="errMsg"
                            v-if="errors.birthday"
                        >
                            {{ errors.birthday[0] }}
                        </small>

                        <FormGroup class="mb-1">
                            <template #label> Contact Number </template>
                            <template #input>
                                <input
                                    type="number"
                                    id="#number"
                                    v-model="form.contact_number"
                                />
                            </template>
                        </FormGroup>
                        <small
                            class="errMsg"
                            ref="errMsg"
                            v-if="errors.contact_number"
                        >
                            {{ errors.contact_number[0] }}
                        </small>
                    </div>

                    <div class="address-details">
                        <h3>Address Details</h3>
                        <hr />
                        <FormGroup>
                            <template #label>Region</template>
                            <template #input>
                                <select
                                    id="region"
                                    v-model="form.region"
                                    @change="province(form.region)"
                                >
                                    <option :selected="true">
                                        Choose Region
                                    </option>
                                    <option
                                        v-for="region in regions"
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
                        <small class="errMsg" ref="errMsg" v-if="errors.region">
                            {{ errors.region[0] }}
                        </small>

                        <FormGroup>
                            <template #label>Province</template>
                            <template #input>
                                <select
                                    id="province"
                                    v-model="form.province"
                                    @change="city(form.province)"
                                >
                                    <option :selected="true">
                                        {{ form.province }}
                                    </option>
                                    <option
                                        v-for="province in provinces"
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
                        <small
                            class="errMsg"
                            ref="errMsg"
                            v-if="errors.province"
                        >
                            {{ errors.province[0] }}
                        </small>

                        <FormGroup>
                            <template #label>City/Town</template>
                            <template #input>
                                <select
                                    id="city"
                                    v-model="form.city"
                                    @change="brgy(form.city)"
                                >
                                    <option :selected="true">
                                        {{ form.city }}
                                    </option>
                                    <option
                                        v-for="city in cities"
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
                        <small class="errMsg" ref="errMsg" v-if="errors.city">
                            {{ errors.city[0] }}
                        </small>

                        <FormGroup>
                            <template #label>Baranggay</template>
                            <template #input>
                                <select id="baranggay" v-model="form.baranggay">
                                    <option :selected="true">
                                        {{ form.baranggay }}
                                    </option>
                                    <option
                                        v-for="baranggay in baranggays"
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
                        <small class="errMsg" ref="errMsg" v-if="errors.brgy">
                            {{ errors.brgy[0] }}
                        </small>

                        <FormGroup class="">
                            <template #label> Street </template>
                            <template #input>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    v-model="form.street"
                                />
                            </template>
                        </FormGroup>
                        <small class="errMsg" ref="errMsg" v-if="errors.street">
                            {{ errors.street[0] }}
                        </small>
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
                first_name: null,
                mid_name: null,
                last_name: null,
                ext_name: null,
                contact_number: null,
                birthday: null,
                email: null,
                password: null,
                password_confirmation: null,
                region: null,
                province: null,
                city: null,
                baranggay: null,
                street: null,
            },

            regions: null,
            provinces: null,
            cities: null,
            baranggays: null,

            isClicked: false,
            lightMode: false,
            errors: {},
        };
    },

    beforeMount() {
        Address.regions().then((region) => {
            this.regions = region;
        });
    },

    methods: {
        province(region) {
            Address.provinces(region).then((province) => {
                this.provinces = province;
            });
        },

        city(province) {
            this.form.province = province.province_name;
            Address.cities(province.province_code).then((city) => {
                this.cities = city;
            });
        },

        brgy(city) {
            this.form.city = city.city_name;
            Address.barangays(city.city_code).then((baranggay) => {
                this.baranggays = baranggay;
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
                        console.log(e.response.data);
                        setTimeout(() => {
                            this.errors.email = null;
                            this.errors.password = null;
                        }, 5000);
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

.card h1,
.personal-details,
.account-details,
.address-details {
    color: #efa926;
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
    background: #efa926 !important;
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
    border: 1px solid #dfdede;
    background: rgba(236, 236, 240, 0.1);
    color: #888;
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
    color: #fff;
}

.register-button:hover {
    background: #d69215;
}

.back-to-home-wrapper {
    display: flex;
    justify-content: flex-end;
}

.back-to-home {
    color: #efa726;
    text-decoration: none;
    font-size: 0.8rem;
}
</style>
