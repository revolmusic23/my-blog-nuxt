<template>
  <Card>
    <ContentDoc v-slot="{ doc }">
      <article class="article prose prose-lg max-w-none p-4">
        <h1 class="text-3xl font-semibold tracking-wider mb-4">
          {{ doc.title }}
        </h1>
        <div class="text-gray-500 mb-6">
          {{ new Date(doc.date).toLocaleDateString("zh-TW") }}
        </div>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </Card>
</template>

<style>
.article {
  font-size: 1.125rem;
  line-height: 1.8;

  h1,
  h2,
  h3 {
    letter-spacing: 0.15rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 1.2rem;
    line-height: 1.2;
    font-weight: 600;
  }
  h1 {
    font-size: 1.875rem;
    letter-spacing: 0.15rem;
    margin-top: 1rem;
  }
  h2 {
    font-size: 1.5rem;
    border-top: none;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.375rem;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1.125em;
  }
  h6 {
    font-size: 1rem;
  }
  p {
    line-height: 1.8;
    margin: 1rem 0;
  }

  blockquote {
    /* background: #eee; */
    padding: 0rem 1rem;
    border-left: 4px solid #eee;
  }

  /* pre > code { */
  pre {
    /* font-size: 0.9rem; */
    font-weight: 400;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    background: #eaeaeb;
  }

  :not(pre, h1, h2, h3, h4, h5, h6) > code {
    font-size: 0.9rem;
    color: #000;
    padding: 0.2rem 0.5rem;
    border: none;
    background: rgba(142, 150, 170, 0.14);
  }

  ul,
  ol {
    margin: 0 0 1rem 0;
    padding-left: 2rem;
  }

  ol {
    list-style-type: decimal;
  }

  ul {
    list-style-type: disc;
    ul {
      list-style-type: circle;
    }
  }

  /* ul {
    list-style-type: circle;
  } */
  img {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
}
</style>
