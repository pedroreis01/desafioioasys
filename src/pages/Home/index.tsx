import React, { useCallback, useEffect, useState } from 'react';
import {
  BodyHome,
  ContainerHome,
  ContentError,
  ContentLogo,
  ContentLogout,
  FooterHome,
  HeaderHome,
  PaginationIcons,
  TextHeader,
  TitleHome,
} from './styles';
import LogoBlack from '../../assets/LogoBlack.png';
import Prev from '../../assets/Prev.png';
import Next from '../../assets/Next.png';
import LogOut from '../../assets/LogOut.png';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import CardBook, { CardProps } from '../../components/CardBook';
import ModalBook from '../../components/ModalBook';

interface BookData {
    data: CardProps[];
    page: number;
    totalItems: number;
    totalPages: number;
}

const Home: React.FC = () => {
  const { user, signOut, token } = useAuth();
  const [booksData, setBooksData] = useState<BookData>();
  const [page, setPage] = useState<number>(1);
  const [errorPage, setErrorPage] = useState<boolean>(false);
  const [bookId, setBookId] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    console.log(token);
    api.get(`books?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setErrorPage(false);
        setBooksData(response.data);
      })
      .catch((error) => {
        setErrorPage(true);
      });
  }, [token, page]);

  return (
        <>
            <ContainerHome>
                <HeaderHome>
                    <ContentLogo>
                        <img src={LogoBlack} alt="LogoBlack" />
                        <TitleHome>Books</TitleHome>
                    </ContentLogo>
                    <ContentLogout>
                        <TextHeader>
                            Bem vindo(a), <b>{user.name}!</b>
                        </TextHeader>
                        <img
                          src={LogOut}
                          alt="LogOut"
                          onClick={() => signOut()}
                        />
                    </ContentLogout>
                </HeaderHome>
                {errorPage ? (
                    <ContentError>
                        <p>Erro ao obter os livros!</p>
                    </ContentError>
                ) : (
                    <>
                        <BodyHome>
                            {booksData?.data.map((e: CardProps, i: number) => (
                                <CardBook
                                  id={e.id}
                                  key={e.id}
                                  title={e.title}
                                  imageUrl={e.imageUrl}
                                  authors={e.authors}
                                  pageCount={e.pageCount}
                                  publisher={e.publisher}
                                  published={e.published}
                                  onClick={() => {
                                    setIsOpen(true);
                                    setBookId(e.id);
                                  }}
                                />
                            ))}
                        </BodyHome>
                        <FooterHome>
                            <p>
                                Página <b> {booksData?.page} </b> de{' '}
                                <b> {booksData?.totalPages}</b>
                            </p>
                            <PaginationIcons>
                                <img
                                  src={Prev}
                                  alt=""
                                  onClick={() =>
                                    setPage((prev) =>
                                      (prev === 1 ? prev : prev - 1))}
                                />
                                <p>
                                    Página <b> {booksData?.page} </b> de{' '}
                                    <b> {booksData?.totalPages}</b>
                                </p>
                                <img
                                  src={Next}
                                  alt=""
                                  onClick={() =>
                                    setPage((prev) =>
                                      (prev === booksData?.totalPages
                                        ? prev
                                        : prev + 1))}
                                />
                            </PaginationIcons>
                        </FooterHome>
                    </>
                )}
            </ContainerHome>
            <ModalBook id={bookId} show={isOpen} handleClose={onClose} />
        </>
  );
};

export default Home;
