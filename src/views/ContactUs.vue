<template>
  <div class="container is-fullhd">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">Phone</label>
      <div class="control">
        <input class="input" type="tel" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>

    <div class="field">
      <label class="label">Subject</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Select option</option>
            <option>Bug</option>
            <option>Feedback</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-dark">Submit</button>
      </div>
      <div class="control">
        <button class="button is-dark">Cancel</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.org-description {
  text-align: center;
}
.container {
  margin-top: 20px;

  margin: 0 auto;
  padding: 1rem;
  background-color: lightgray;
}
</style>