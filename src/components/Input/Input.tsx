import React from "react";
import * as S from "./Input.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Input() {
  return (
    <S.InputContainer>
      {" "}
      <FontAwesomeIcon icon={faSearch} />
      <S.Input placeholder="Search for a country" />
    </S.InputContainer>
  );
}
