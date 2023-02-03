<template>
    <HomeLayout @logout="$emit('logout')">
        <template #navbar>
            <slot name="navbar-comp"></slot>
        </template>

        <Modal :useIcon="true" v-if="result.message" :result="result"></Modal>

        <h2>All Messages</h2>
        <div class="message-wrapper">
            <!-- Message Sidebar -->
            <div class="message-card-sidebar">
                <div class="message-title-section">
                    <h3 class="mb-1">Messages</h3>
                    <input type="text" placeholder="Search" />
                    <span class="material-symbols-rounded search">
                        search
                    </span>
                </div>
                <!-- Message Inbox -->
                <div class="message-inbox">
                    <h5 class="message-inbox-user">John Doe</h5>
                    <p class="message-inbox-latest-message">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit...
                    </p>
                </div>
                <!-- End Message Inbox -->
                <!-- Message Inbox -->
                <div class="message-inbox">
                    <h5 class="message-inbox-user">John Doe</h5>
                    <p class="message-inbox-latest-message">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit...
                    </p>
                </div>
                <!-- End Message Inbox -->
                <!-- Message Inbox -->
                <div class="message-inbox">
                    <h5 class="message-inbox-user">John Doe</h5>
                    <p class="message-inbox-latest-message">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit...
                    </p>
                </div>
                <!-- End Message Inbox -->

                <!-- Message Inbox -->
                <div class="message-inbox">
                    <h5 class="message-inbox-user">John Doe</h5>
                    <p class="message-inbox-latest-message">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit...
                    </p>
                </div>
                <!-- End Message Inbox -->

                <!-- Message Inbox -->
                <div class="message-inbox">
                    <h5 class="message-inbox-user">John Doe</h5>
                    <p class="message-inbox-latest-message">
                        Lorem, ipsum dolor sit amet consec...
                    </p>
                </div>
                <!-- End Message Inbox -->

                <!-- Message Inbox -->
                <div class="message-inbox">
                    <h5 class="message-inbox-user">John Doe</h5>
                    <p class="message-inbox-latest-message">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit...
                    </p>
                </div>
                <!-- End Message Inbox -->
            </div>

            <div class="message-card-main">
                <div class="message-card-banner">
                    <h3>John Doe</h3>
                    <router-link to="/profile">View Profile</router-link>
                </div>

                <div class="message-main-content">
                    <p class="message-main-text-left">Hi</p>
                    <p class="message-main-text-right">Hello</p>
                    <p class="message-main-text-left">Hi</p>
                    <p class="message-main-text-left">Hi</p>
                    <p class="message-main-text-right">Hello</p>
                    <p class="message-main-text-right">Hello</p>
                    <p class="message-main-text-right">Hello</p>
                    <p class="message-main-text-right">Hello</p>
                </div>
                <div class="message-footer">
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        class="message-textarea"
                        placeholder="Send a message"
                    ></textarea>
                    <button class="message-send">Send</button>
                </div>
            </div>
        </div>
    </HomeLayout>
</template>

<script>
import HomeLayout from "../layouts/HomeLayout.vue";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";
import { mapGetters } from "vuex";

export default {
    components: { HomeLayout, Button, Modal },

    computed: {
        ...mapGetters({
            result: "auth/result",
        }),
    },

    mounted() {
        document.querySelector(".message-main-content").scrollTop =
            document.querySelector(".message-main-content").scrollHeight;
    },
};
</script>

<style scoped>
main {
    position: relative;
    padding: 0 1.5rem 1rem;
}

section {
    margin-top: 5rem;
}

.message-wrapper {
    display: flex;
}

/* Sidebar */

::-webkit-scrollbar {
    width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 10px;
}

.message-wrapper .message-card-sidebar {
    height: 600px;
    width: 25%;
    border: 2px solid rgba(236, 236, 240, 0.3);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    overflow-y: scroll;
    position: relative;
}

.message-wrapper .message-card-sidebar .message-title-section {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    background: #121627;
}
.message-wrapper .message-card-sidebar .message-title-section input,
.message-wrapper .message-card-main .message-footer textarea {
    outline: none;
    width: 100%;
    border: 0;
    padding: 1rem 1rem 1rem 2.8rem;
    border-radius: 5px;
    background: rgba(236, 236, 240, 0.3);
    color: #fff;
    font-size: 16px;
    font-family: inherit;
    position: relative;
}
.message-wrapper .message-card-sidebar .message-title-section .search {
    position: absolute;
    left: 45px;
    transform: translateY(50%);
    color: #a9a9a9;
}
.message-wrapper
    .message-card-sidebar
    .message-title-section
    input::placeholder,
.message-wrapper .message-card-main .message-footer textarea::placeholder {
    color: #fff;
    font-size: 16px;
}

.message-wrapper .message-card-sidebar .message-title-section {
    padding: 2rem 2rem 1.5rem;
    border-bottom: 2px solid rgba(236, 236, 240, 0.3);
}

.message-wrapper .message-card-sidebar .message-inbox {
    border-bottom: 2px solid rgba(236, 236, 240, 0.3);
    padding: 1rem 1.5rem;
}

/* Main  Content */
.message-wrapper .message-card-main {
    height: 600px;
    width: 75%;
    border: 2px solid rgba(236, 236, 240, 0.3);
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.message-wrapper .message-card-main .message-card-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #121627;
    color: #fff;
    padding: 1.5rem;
}
.message-wrapper .message-card-main .message-card-banner a,
.message-wrapper .message-card-main .message-footer button {
    outline: none;
    border: none;
    font-family: inherit;
    font-weight: 500;
    color: #fff;
    background: #efa726;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in;
    text-decoration: none;
}

.message-wrapper .message-card-main .message-card-banner a:hover,
.message-wrapper .message-card-main .message-footer a:hover {
    background: #d69215;
}

/* content */
.message-wrapper .message-card-main .message-main-content {
    height: 20.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
    overflow-y: scroll;
    box-shadow: 0 0 1rem #0c1123;
}

.message-wrapper
    .message-card-main
    .message-main-content
    .message-main-text-left,
.message-wrapper
    .message-card-main
    .message-main-content
    .message-main-text-right {
    background: rgba(236, 236, 240, 0.3);
    display: inline-block;
    padding: 1rem;
    border-radius: 5px;
}

.message-wrapper
    .message-card-main
    .message-main-content
    .message-main-text-left {
    margin-left: 4rem;
}

.message-wrapper
    .message-card-main
    .message-main-content
    .message-main-text-right {
    align-self: flex-end;
    margin-right: 4rem;
}

.message-wrapper .message-card-main .message-footer {
    margin: 1rem 2rem;
    position: relative;
}

.message-wrapper .message-card-main .message-footer textarea,
.message-wrapper .message-card-main .message-footer textarea:focus {
    outline: none;
    border: none;
    width: 100%;
    height: 8rem;
    padding: 1rem 6rem 1rem 1rem;
    font-family: inherit;
    border: 2px solid rgba(236, 236, 240, 0.3);
    position: relative;
    resize: none;
}

.message-wrapper .message-card-main .message-footer button {
    position: absolute;
    bottom: 1rem;
    right: 0.5rem;
}
</style>
