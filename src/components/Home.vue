<template>
  <div>
    <button v-on:click="showTable = true">Сгенерировать таблицу</button>
    <table class="table" id="table" v-if="showTable">
      <tr>
        <th>Наименование</th>
        <th>Цена</th>
        <th>Количество</th>
        <th>Стоимость</th>
      </tr>
      <tr v-for="(item, index) in items" v-bind:key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.total }}</td>
      </tr>
      <tr>
        <td><b>Итого:</b></td>
        <td></td>
        <td></td>
        <td>
          <b>{{ totalItem }}</b>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { customAlphabet } from "nanoid/non-secure";

export default {
  data() {
    return {
      showTable: !true,
      items: [],
    };
  },

  computed: {
    totalItem: function () {
      let sum = 0;
      for (let i = 0; i < this.items.length; i++) {
        sum += Number(this.items[i].total);
      }

      return sum;
    },
  },

  mounted() {
    const arr = [];
    console.log(arr);
    for (let i = 0; i < 50; i++) {
      arr.push({
        name: this.randomName(),
        price: this.randomNumber(),
        amount: this.randomAmount(),
        total: this.getTotalCost(),
      });
    }
    this.items.push(...arr);
  },

  methods: {
    randomName() {
      const nanoid = customAlphabet("абвгдежзиклмнопрстуфхцчшщъыьэюя", 5);
      return (this.name = nanoid());
    },

    randomNumber() {
      return (this.price = Number((Math.random() * 1000).toFixed(2)));
    },

    randomAmount() {
      return (this.amount = Math.round(Math.random() * 100));
    },

    getTotalCost() {
      return Number((this.total = this.price * this.amount).toFixed(2));
    },
  },
};
</script>

<style lang="scss" scoped>
td {
  text-align: center;
}

td:not(:last-of-type) {
  padding-right: 50px;
}

th:not(:last-of-type) {
  padding-right: 50px;
}

.table {
  border: 1px solid black;
  margin: 10px 0;
}

button {
  cursor: pointer;
}
</style>
