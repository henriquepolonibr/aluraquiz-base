import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Projeto React Henrique-localhost</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (evento) {
              evento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                placeholder="preencha seu nome"
                onChange={function (infosDoEvento) {
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
              />
              <Widget.ButtonQuiz type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </Widget.ButtonQuiz>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <h1>Quizes da galera</h1>
          <p>lorem ipsum</p>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://google.com" />
    </QuizBackground>
  );
}
