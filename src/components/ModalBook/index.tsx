import { Modal } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import Book from '../../assets/Book.jpg';
import Close from '../../assets/Close.png';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import {
  AuthorsBook,
  CloseModal,
  ContentDescription,
  ContentDetails,
  ContentError,
  DetailsModal,
  HeaderModal,
  ImageModal,
  ModalBody,
  ModalContent,
  TextDescription,
  TextDetails,
  TitleDetails,
  TitleModal,
} from './styles';

interface BookProps {
    id: string;
    title: string;
    description: string;
    authors: string[];
    pageCount: number;
    category: string;
    imageUrl: string;
    isbn10: string;
    isbn13: string;
    language: string;
    publisher: string;
    published: number;
}

interface ModalBookProps {
    id: string;
    show: boolean;
    handleClose: () => void;
}

const ModalBook: React.FC<ModalBookProps> = ({ id, show, handleClose }) => {
  const { token } = useAuth();
  const [bookData, setBookData] = useState<BookProps>();
  const [errorModal, setErrorModal] = useState<boolean>(false);

  useEffect(() => {
    setBookData(undefined);
    api.get(`books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setErrorModal(false);
        setBookData(response.data);
      })
      .catch(() => {
        setErrorModal(true);
      });
  }, [id, token]);

  return (
        <Modal id={id} open={show} onClose={handleClose} disableBackdropClick>
            <>
                {bookData && (
                    <>
                        <CloseModal onClick={handleClose}>
                            <img src={Close} alt="" />
                        </CloseModal>
                        <ModalContent>
                            {errorModal ? (
                                <>
                                    <ContentError>
                                        <p>Erro ao obter detalhes!</p>
                                    </ContentError>
                                </>
                            ) : (
                                <>
                                    <ImageModal>
                                        <img
                                          src={bookData?.imageUrl ?? Book}
                                          alt=""
                                        />
                                    </ImageModal>
                                    <ModalBody>
                                        <HeaderModal>
                                            <TitleModal>
                                                {bookData?.title}
                                            </TitleModal>
                                            <AuthorsBook>
                                                {bookData?.authors
                                                  .toString()
                                                  .replace(',', ', ')}
                                            </AuthorsBook>
                                        </HeaderModal>
                                        <DetailsModal>
                                            <TitleDetails>
                                                INFORMAÇÕES
                                            </TitleDetails>
                                            <ContentDetails>
                                                <TitleDetails>
                                                    Páginas
                                                </TitleDetails>
                                                <TextDetails>
                                                    {bookData?.pageCount}{' '}
                                                    páginas
                                                </TextDetails>
                                            </ContentDetails>
                                            <ContentDetails>
                                                <TitleDetails>
                                                    Editora
                                                </TitleDetails>
                                                <TextDetails>
                                                    Editora{' '}
                                                    {bookData?.publisher}
                                                </TextDetails>
                                            </ContentDetails>
                                            <ContentDetails>
                                                <TitleDetails>
                                                    Publicação
                                                </TitleDetails>
                                                <TextDetails>
                                                    {bookData?.published}
                                                </TextDetails>
                                            </ContentDetails>
                                            <ContentDetails>
                                                <TitleDetails>
                                                    Idioma
                                                </TitleDetails>
                                                <TextDetails>
                                                    {bookData?.language}
                                                </TextDetails>
                                            </ContentDetails>
                                            <ContentDetails>
                                                <TitleDetails>
                                                    Título Original
                                                </TitleDetails>
                                                <TextDetails>
                                                    {bookData?.title}
                                                </TextDetails>
                                            </ContentDetails>
                                            <ContentDetails>
                                                <TitleDetails>
                                                    ISBN-10
                                                </TitleDetails>
                                                <TextDetails>
                                                    {bookData?.isbn10}
                                                </TextDetails>
                                            </ContentDetails>
                                            <ContentDetails>
                                                <TitleDetails>
                                                    ISBN-13
                                                </TitleDetails>
                                                <TextDetails>
                                                    {bookData?.isbn13}
                                                </TextDetails>
                                            </ContentDetails>
                                        </DetailsModal>
                                        <ContentDescription>
                                            <TitleDetails>
                                                RESENHA DA EDITORA
                                            </TitleDetails>
                                            <TextDescription>
                                                {bookData?.description}
                                            </TextDescription>
                                        </ContentDescription>
                                    </ModalBody>
                                </>
                            )}
                        </ModalContent>
                    </>
                )}
            </>
        </Modal>
  );
};

export default ModalBook;
