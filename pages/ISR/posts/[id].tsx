export default function Page({ title }: { title: string }) {
  return (
    <main>
      <section>
        <h1>{title}</h1>
      </section>
    </main>
  );
}

async function fetchPost({ id }: { id: number }) {
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((res) => setTimeout(res, 3000)); // 서버상태 mock
  const data = [
    { id: 1, title: 'ISR Sample Page 1' },
    { id: 2, title: 'ISR Sample Page 2' },
    { id: 3, title: 'ISR Sample Page 3' }
  ];

  const post = data.find((it) => it.id === id);

  if (post === undefined) {
    throw Error('Post not found');
  }

  return post;
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { title } = await fetchPost({ id: Number(params.id) });

  return {
    props: {
      title
    },
    /**
     * Next.js 는 아래의 경우 페이지를 re-generate 한다.
     * - 페이지 Request 가 올 경우
     * - 최대 10초 마다 한번
     */
    revalidate: 10
  };
}

export async function getStaticPaths() {
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((res) => setTimeout(res, 3000)); // 서버상태 mock
  // pre-render 하고 싶은 원하는 post 의 경로 설정.
  const paths = [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }];

  return { paths, fallback: 'blocking' };
}
