import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard('3e615ecf-11d3-4c1c-85c5-6c0eb7ff3e22');
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
