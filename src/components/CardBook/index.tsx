import React from 'react';

import Book from '../../assets/Book.jpg';
import {
  AuthorsCard,
  ContainerCard,
  DetailsCard,
  FooterCard,
  HeaderCard,
  ImageCard,
  TextCard,
  TitleCard,
} from './styles';

export interface CardProps {
    id: string;
    imageUrl: string;
    title: string;
    authors: string[];
    pageCount: number;
    publisher: string;
    published: number;
    onClick: () => void;
}

const CardBook: React.FC<CardProps> = ({
  id,
  imageUrl,
  title,
  authors,
  pageCount,
  publisher,
  published,
  onClick,
}) => {
  return (
        <ContainerCard id={id} onClick={onClick}>
            <ImageCard>
                <img src={imageUrl ?? Book} alt="" />
            </ImageCard>
            <DetailsCard>
                <HeaderCard>
                    <TitleCard>{title}</TitleCard>
                    {authors.map((e: string, i: number) => (
                        <AuthorsCard key={`author${i}`}>{e}</AuthorsCard>
                    ))}
                </HeaderCard>
                <FooterCard>
                    <TextCard>{pageCount} páginas</TextCard>
                    <TextCard>Editora {publisher}</TextCard>
                    <TextCard>Publicado em {published}</TextCard>
                </FooterCard>
            </DetailsCard>
        </ContainerCard>
  );
};

export default CardBook;
