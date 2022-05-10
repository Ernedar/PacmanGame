import React, { FC } from "react";
import { GameStateType } from '../../utils/enums';
import classNames from 'classnames';

import "./GameInfoModal.css";

type ModalProps = {
  gameStateType: GameStateType;
};

const GameInfoModal: FC<ModalProps> = ({gameStateType}) => {

  const opened = gameStateType === GameStateType.notstarted || gameStateType === GameStateType.paused || gameStateType === GameStateType.finished

  return (
    <div className={classNames('modal-wrapper', {'opened': opened, 'closed': !opened})}>
      <div className="modal-card">

      </div>
    </div>
  )
};

export default GameInfoModal;