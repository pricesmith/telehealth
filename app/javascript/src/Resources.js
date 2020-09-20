import React from 'react';

function Resources(props) {
  return (
    <div id="" className="">
      <div className="flex flex-col capitalize text-3xl mb-4">
        <span className="font-semibold">Resources</span>
        <span className="">Recent Publications</span>
      </div>

      <div className="flex">
        <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + '/effectiveness-of-proloquo.pdf'} className="font-semibold flex-col justify-center content-center items-center text-center">
          <img className="h-64 max-w-none mx-auto" src={process.env.PUBLIC_URL + '/effectiveness-of-proloquo.png'} alt="" />

          <div className="font-semibold text-center">Effectiveness Of Proloquo2go In Enhancing Communication In Children With Autism During Aba Therapy</div>
        </a>

        <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + '/Tiura-et-al-2017.pdf'} className="font-semibold flex-col justify-center content-center items-center text-center">
          <img className="h-64 max-w-none mx-auto" src={process.env.PUBLIC_URL + '/tiura-et-al-2017.png'} alt="" />

          <div className="font-semibold text-center">Predictors of longitudinal ABA treatment outcomes for children with autism: A growth curve analysis</div>
        </a>
      </div>
    </div>
  );
}

export default Resources;
