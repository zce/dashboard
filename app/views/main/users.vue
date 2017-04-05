<template>
  <div>
    <div class="heading">
      <h1 class="title" v-if="selections.length">{{ selections.length }}个被选中</h1>
      <h1 class="title" v-else>{{ total }}个用户</h1>
      <transition name="fade">
        <ul class="action" v-show="selections.length">
          <li><a href="#" class="icon-before icon-checkmark"></a></li>
          <li><a href="#" class="icon-before icon-blocked"></a></li>
          <li><a href="#" class="icon-before icon-bin"></a></li>
        </ul>
      </transition>
      <form class="search icon-before icon-search" v-if="users.length" @submit.prevent="handleSearch">
        <input type="text" placeholder="搜索" v-model="search">
      </form>
      <el-button type="primary" size="small" icon="plus">添加用户</el-button>
    </div>
    <el-table :data="users" @selection-change="handleSelectionChange" @filter-change="handleFilterChange" @sort-change="handleSortChange">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="username" label="用户名" min-width="180" sortable="custom">
        <template scope="scope">
          <div class="user-info">
            <img :src="scope.row.meta.avatar" alt="scope.row.name">
            <div class="names">
              <router-link to="/">{{ scope.row.username }}</router-link>
              <span>{{ scope.row.name }}</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="120" align="center" :filters="[{ text: '已激活', value: 'activated' }, { text: '未激活', value: 'unactivated' }]">
        <template scope="scope">
          <i class="status status-primary" v-if="scope.row.status === 'activated'" title="已激活"></i>
          <!-- other status -->
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="200" sortable="custom"></el-table-column>
      <el-table-column prop="phone" label="手机" width="140" sortable="custom"></el-table-column>
      <el-table-column label="角色" width="240" :filters="[{ text: '管理员', value: 'administrator' }, { text: '作者', value: 'author' }, { text: '编辑', value: 'editor' }]">
        <template scope="scope">{{ scope.row.roles.toString() }}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="total, sizes, prev, pager, next"
      :current-page="page"
      :page-sizes="[20, 30, 50]"
      :page-size="size"
      :total="total"
      @size-change="handlePageSizeChange"
      @current-change="handleCurrentPageChange">
    </el-pagination>
  </div>
</template>

<script>
  import { UserService } from 'libraries/services'

  export default {
    name: 'users',

    data () {
      return {
        users: [],
        selections: [],
        size: 20,
        page: 1,
        total: 0,
        search: '',
        sort: '',
        order: '',
        filters: {},
        loading: false
      }
    },

    created () {
      this.loadUsers()
    },

    methods: {
      loadUsers () {
        // toggle loading
        this.loading = true
        // paginate
        const params = { _page: this.page, _limit: this.size }
        // sort
        if (this.sort) params._sort = this.sort
        if (this.order) params._order = this.order
        // search
        if (this.search) params.q = this.search
        // filter
        Object.assign(params, this.filters)
        // request
        return UserService.get({ params })
          .then(res => {
            this.users = res.data
            this.total = res.headers['x-total-count'] - 0
            // toggle loading
            this.loading = false
          })
          .catch(err => {
            console.error(err)
          })
      },

      handleSearch () {
        this.loadUsers()
      },

      handleSelectionChange (value) {
        this.selections = value
      },

      handleFilterChange (value) {
        console.log(value)
      },

      handleSortChange (e) {
        this.sort = e.prop
        if (e.order) this.order = e.order === 'ascending' ? 'ASC' : 'DESC'
        this.loadUsers()
        return false
      },

      handlePageSizeChange (value) {
        this.size = value
        this.loadUsers()
      },

      handleCurrentPageChange (value) {
        this.page = value
        this.loadUsers()
      }
    }
  }
</script>

<style lang="scss">
  .el-pagination {
    margin: 1rem 0 2rem;
    text-align: right;
  }

  .user-info {
    display: flex;
    align-items: center;

    img {
      width: 2rem;
      margin: 1rem 1rem 1rem 0;
      border: .0625rem solid #c0c0c0;
      border-radius: 50%;
      background: #cfd2d7;
    }

    .names {
      display: flex;
      flex: 1;
      flex-direction: column;
      font-size: .8125rem;
      line-height: 1.4;
    }
  }
</style>
