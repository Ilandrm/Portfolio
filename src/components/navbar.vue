<script setup lang="ts">

</script>

<template>
<nav class="pt-3">
  <div class="d-flex justify-content-between">
    <div class="d-flex">
      <div class="divBtn ms-5">
      <button class="emailbtn">ilandarmon28@gmail.com</button>
      <button class="copyEmailBtn">Copier</button>
      </div>
      <button class="copyEmailBtn ms-2">CV</button>
    </div>
    <div class="linkSection d-flex me-5">
      <a href="#" class="me-2">Linkedin </a>
      <a href="#" class="ms-2 me-2">Github </a>
      <a href="#" class="ms-2">Gitlab</a>
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
