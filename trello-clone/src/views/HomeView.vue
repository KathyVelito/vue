<template>
  <div class="home">
    <h3>Mis paneles</h3>
    <div class="boards-collection">
      <template v-if="fetchingData">
        <span>Loading...</span>
      </template>
      <input
        type="text"
        placeholder="Añade un nuevo panel"
        v-model="boardName"
        @keyup.enter="add()"
      />
      <BoardCard
        v-for="(board, index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
import BoardCard from '@/components/BoardCard'

export default {
  name: 'HomeView',
  components: {
    BoardCard
  },
  data() {
    return {
      boardName:'',
    }
  },
  computed: {
    ...mapState([
      'boards',
      'fetchingData',
      'error'
    ])
  },
  methods: {
    ...mapActions([
      'fetchBoards',
      'addBoard'
    ]),
    add() {
      this.boards.push({ name: this.boardName })
    }
  },

  created () {
    this.fetchBoards({ user: 1 })
  }
}
</script>

<style lang="scss" scoped>
  h3 {
    text-align: left;
    margin: 1.5rem;
  }
  .boards-collection {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
  }
  input {
    box-sizing: border-box;
    background-color: #546E7A;
    border: 2px solid #546E7A;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease;
    &:focus,
    &:active {
      background-color: white;
      color: #546E7A;
    }
    &::placeholder {
      color: white;
    }
  }
</style>