<template>
    <RegisterForm :form="form" @register="register">
        <template #form-top>
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
                    <small class="errMsg" ref="errMsg" v-if="errors.first_name">
                        {{ errors.first_name[0] }}
                    </small>

                    <FormGroup>
                        <template #label> Middle Name </template>
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
                    <small class="errMsg" ref="errMsg" v-if="errors.last_name">
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
                        <template #label> Birthday *</template>
                        <template #input>
                            <input
                                type="date"
                                min="1930-01-01"
                                max="2012-12-31"
                                v-model="form.birthday"
                            />
                        </template>
                    </FormGroup>
                    <small class="errMsg" ref="errMsg" v-if="errors.birthday">
                        {{ errors.birthday[0] }}
                    </small>

                    <FormGroup>
                        <template #label> Contact Number *</template>
                        <template #input>
                            <input
                                type="number"
                                id="#number"
                                v-model="form.contact_number"
                            />
                        </template>
                    </FormGroup>
                    <small
                        class="errMsg mb-2"
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
                        <template #label>Region *</template>
                        <template #input>
                            <select
                                id="region"
                                v-model="form.region"
                                @change="province(form.region)"
                            >
                                <option :selected="true">Choose Region</option>
                                <option
                                    v-for="region in regions"
                                    :value="region.region_code"
                                    :key="region.id"
                                >
                                    {{ region.region_name }}
                                </option>
                            </select>
                            <span class="material-symbols-rounded expand_more">
                                expand_more
                            </span>
                        </template>
                    </FormGroup>
                    <small class="errMsg" ref="errMsg" v-if="errors.region">
                        {{ errors.region[0] }}
                    </small>

                    <FormGroup>
                        <template #label>Province *</template>
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
                            <span class="material-symbols-rounded expand_more">
                                expand_more
                            </span>
                        </template>
                    </FormGroup>
                    <small class="errMsg" ref="errMsg" v-if="errors.province">
                        {{ errors.province[0] }}
                    </small>

                    <FormGroup>
                        <template #label>City/Town *</template>
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
                            <span class="material-symbols-rounded expand_more">
                                expand_more
                            </span>
                        </template>
                    </FormGroup>
                    <small class="errMsg" ref="errMsg" v-if="errors.city">
                        {{ errors.city[0] }}
                    </small>

                    <FormGroup>
                        <template #label>Baranggay *</template>
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
                            <span class="material-symbols-rounded expand_more">
                                expand_more
                            </span>
                        </template>
                    </FormGroup>
                    <small class="errMsg" ref="errMsg" v-if="errors.baranggay">
                        {{ errors.baranggay[0] }}
                    </small>

                    <FormGroup class="">
                        <template #label> Street *</template>
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
        </template>
        <template #form-bottom>
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

                    <small class="errMsg" ref="errMsg" v-if="errors.password">
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
        </template>
    </RegisterForm>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";
import FormGroup from "@/components/FormGroup.vue";
import Address from "select-philippines-address";

export default {
    components: { RegisterForm, FormGroup },
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

            loading: false,
            errors: {},
        };
    },

    mounted() {
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
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
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
                    });
            }, 500);
        },
    },
};
</script>
