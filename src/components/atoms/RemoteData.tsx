import React from 'react'
import { Empty, Error, Loading } from '.';

type Props = {
    isLoading: boolean;
    isError: boolean;
    isEmpty: boolean;
    component: React.ReactElement;
}

export const RemoteData: React.FC<Props> = ({isLoading, isError, component, isEmpty}) => {

  if(isLoading){
    return <Loading/>;
  }

  if(isError){
    return <Error/>;
  }

  if(isEmpty){
    return <Empty/>;
  }

  return component;
};
