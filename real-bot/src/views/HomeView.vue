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
      :id="board.id"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// @ is an alias to /src
import BoardCard from '@/components/BoardCard'

export default {
  name: 'HomeView',
  components: {
    BoardCard
  },
  data () {
    return {
      boardName: ''
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
    add () {
      this.addBoard({ name: this.boardName })
      this.boardName = ''
    }
  },
  created () {
    this.fetchBoards({ user: '1' })
  }
}

</script>

<style lang="scss" scoped>
  h3 {
    text-align: left;
    margin: 30px;
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
    background-color: #546e7a;
    border: 2px solid #546e7a;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease;

    &:focus,
    &:active {
      background-color: white;
      color: #546e7a;
    }

    &::placeholder{
      color: white;
    }

}

</style>
