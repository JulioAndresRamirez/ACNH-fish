import React from 'react';
const Fish = ({
  id,
  name,
  price,
  location,
  shadow,
  schedule,
  seasons,
  inWater,
}) => {
  const urlFishImage =
    'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish';

  const formatLongNames = (name) => {
    if (name.length > 14) {
      return 'text-sm';
    }
    return 'text-lg';
  };

  return (
    <div
      className={`${
        inWater ? 'inWater' : ''
      } fishTile bg-white w-fisTileWMAx h-fishHTileDefault mx-2 mt-3 rounded-lg pr-3 pl-0 py-2 shadow-md hover:shadow-lg grid grid-cols-4 grid-rows-2 hover:-translate-y-1 transform`}
    >
      <div className="image_flags col-span-1 row-span-2 flex flex-col flex-no-wrap justify-between items-center mr-1 ">
        <div className="overflow-hidden flex flex-row justify-center items-center p-1">
          <img src={`${urlFishImage}${id}.png`} alt={name} />
        </div>
        <div className="flagtags">
          { inWater ?
              <div className="greenflag inline-block -mr-3 rounded-full w-4 h-4 bg-fish-accent-green self-center shadow border-2 border-solid border-white" />
              :
              ''
          }
        </div>
      </div>

      <div className="name_price col-span-3 row-span-1 flex flex-row flex-no-wrap justify-between items-start pt-1">
        <div className="w-2/3">
          <p className={`font-semibold ${formatLongNames(name)} truncate`}>
            {name}
          </p>
          <p className="text-xs font-semibold -mt-1 text-gray-800">
            {schedule}
          </p>
        </div>
        <div>
          <p className="font-bold text-lg self-start">${price}</p>
        </div>
      </div>

      <div className="location_months col-span-3 row-span-2 flex flex-row flex-no-wrap justify-start items-start pt-1">
        <div>
          <p className="text-xs text-gray-500">Location</p>
          <p
            className={`font-semibold truncate -mt-1 ${
              location === 'Desembocadura' ? 'text-sm' : 'text-base'
            }`}
          >
            {location}
          </p>
        </div>

        {!inWater ? (
          <div className="pl-2">
            <p className="text-xs text-gray-500">Seasons</p>
            <p className="font-semibold text-base -mt-1">
              {seasons}
            </p>
          </div>
        ) : (
          <div className="pl-2">
            <p className="text-xs text-gray-500">Shadow</p>
            <p className="font-semibold text-base -mt-1">{shadow}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fish;
