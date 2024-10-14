<template>
  <div class="backdrop">
    <div class="modal">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non vitae
        quia dolores voluptate quas tenetur. Voluptatum dolorem hic quisquam,
        nisi, quo dignissimos natus deserunt laudantium numquam corrupti atque
        est.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.modal {
  width: 400px;
  margin: 100px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
