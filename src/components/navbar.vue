<script setup lang="ts">
import { transformExpression } from "@vue/compiler-core";
import {ref} from "vue";

const email = "ilandarmon28@gmail.com"
const textCopy = ref<string>("Copier" )
const copyToClip = () =>{
  navigator.clipboard.writeText(email)
  textCopy.value = "Copie!"
}

</script>

<template>
<nav class="pt-3">
  <div class="d-flex justify-content-between">
    <div class="d-flex">
      <div class="divBtn ms-5">
      <button class="emailbtn">{{ email }}</button>
      <button class="copyEmailBtn" @click="copyToClip">{{ textCopy }}</button>
      </div>
      <button class="copyEmailBtn ms-2">CV</button>
    </div>
    <div class="linkSection d-flex me-5">
      <a href="https://www.linkedin.com/in/ilan-darmon-0889ab1a0/" class="me-2">Linkedin </a>
      <a href="https://github.com/Ilandrm" class="ms-2 me-2">Github </a>
      <a href="https://gricad-gitlab.univ-grenoble-alpes.fr/darmoni" class="ms-2">Gitlab</a>
    </div>
  </div>
</nav>
</template>

<style scoped lang="scss">
.divBtn{
  border-color: transparent;
  border-radius: 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: rgba(238, 237, 236, 0.96);

}
.emailbtn{
  border-color: transparent;
  border-radius: 30px;

}
nav{
  background-color: #EEEDEC;
}
.linkSection {
  align-items: center;
  p{
    align-self: center;
  }
  a{
    color: black;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
    &:visited{
      color: black;

    }
  }
}
.copyEmailBtn{
  padding: 10px;
  background-color: white;
  border-color: transparent;
  border-radius: 30px;
}
</style>
