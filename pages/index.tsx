import styled from 'styled-components';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import { Button, ButtonRow, Red, Container, PageContainer } from '../components/styled';


const Home: NextPage = () => {

  return (
    <PageContainer>
      <Head>
        <title>aa.watch</title>
        <meta name="description" content="Get paid to watch important videos from activists" />
      </Head>

      <main>
        <Container>

          <Header />

          <Explanation>
            <Step>
              <StepTitle><Red>1.</Red> Start watching Dominion.</StepTitle>
              <StepBody>Stream Dominion here, for free.</StepBody>
            </Step>

            <Step>
              <StepTitle><Red>2.</Red> Answer simple questions along the way.</StepTitle>
              <StepBody>We will periodically pause the film and prompt you with a simple question.</StepBody>
            </Step>

            <Step>
              <StepTitle><Red>3.</Red> Get paid.</StepTitle>
              <StepBody>After finishing the film, provide your CashApp or Venmo username, and <Underline>you'll get $30.</Underline></StepBody>
            </Step>
          </Explanation>

          <ButtonRow>
            <Link href="/watch/1/new"><Button>start watching</Button></Link>
          </ButtonRow>
        </Container>
      </main>
    </PageContainer>
  )
}

export default Home;

const Explanation = styled.div`

`;

const Title = styled.h4``;
const Step = styled.div`
  margin-bottom: 30px;
`;
const StepTitle = styled.h5`
  margin: 0;
  font-size: 20px;
`;
const StepBody = styled.p`
  margin: 0;
`;
const Underline = styled.span`
  text-decoration: underline;
`;
