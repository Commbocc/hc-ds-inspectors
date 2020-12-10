<template>
  <div>
    <table class="table table-sm table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="inspector in $store.inspectors" :key="inspector.id">
          <td>
            <router-link :to="`/${inspector.id}`">{{
              inspector.fullName
            }}</router-link>
          </td>
          <td>{{ inspector.inspectorType }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
