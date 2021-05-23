import React from 'react';
import { useRecoilState } from 'recoil'
import { hemisphere } from '../services/Recoil'
import { HEMISPHERES } from '../utils';
import Button from './Button/Button';

function SelectHemisphere() {
  const [hemisphereValue, setHemisphere] = useRecoilState(hemisphere)

  return (
    <div className="flex-row flex-no-wrap justify-center items-center hidden sm:flex">
      <h3 className="text-lg font-semibold mb-0 pb-0">Hemisphere</h3>
      <div className="flex flex-row flex-no-wrap justify-center items-center ml-4">
        <Button label={'South'} selected={hemisphereValue === HEMISPHERES.South} handleState={() => setHemisphere(HEMISPHERES.South)} />
        <Button label={'North'} selected={hemisphereValue === HEMISPHERES.North} handleState={() => setHemisphere(HEMISPHERES.North)} />
      </div>
    </div>
  );
}

export default SelectHemisphere;
