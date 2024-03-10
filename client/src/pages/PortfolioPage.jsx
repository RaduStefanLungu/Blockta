import React from 'react';
import '../styles/portfolio.css';

export default function PortfolioPage() {
  return (
    <div id="base">
      <h1 id="blc">Our <span>creations</span>, there you will find design, mockups, or previously implemented <span>projects</span></h1>
      <div id="contBlocs">
        <BlocFolio Text={"endum odio mattis. Nulla facilisi. Nulla facilisis vehicula tellus. Morbi convallis ligula eget libero interdum, ut egestas velit dapibus. Donec eget arcu consectetur, pretium est ac, tempus odio. Vivamus sed risus tincidunt, sodales elit in, aliquam nulla. Vivamus rhoncus dapibus ex nec suscipit. Integer et massa tristique, varius libero eget, pharetra purus. Nunc sodales, mi sit amet gravida venenatis, sapien ipsum tristique nisl, et malesuada est magna at ex. Nam nec ligula eu purus rhoncus ultrices id sed est. Sed nec lorem id sem te"} URL={"https://thispersondoesnotexist.com/"} isLeft={true}/>
        <BlocFolio Text={"endum odio mattis. Nulla facilisi. Nulla facilisis vehicula tellus. Morbi convallis ligula eget libero interdum, ut egestas velit dapibus. Donec eget arcu consectetur, pretium est ac, tempus odio. Vivamus sed risus tincidunt, sodales elit in, aliquam nulla. Vivamus rhoncus dapibus ex nec suscipit. Integer et massa tristique, varius libero eget, pharetra purus. Nunc sodales, mi sit amet gravida venenatis, sapien ipsum tristique nisl, et malesuada est magna at ex. Nam nec ligula eu purus rhoncus ultrices id sed est. Sed nec lorem id sem te"} URL={"https://thispersondoesnotexist.com/"} isLeft={false}/>
        <BlocFolio Text={"endum odio mattis. Nulla facilisi. Nulla facilisis vehicula tellus. Morbi convallis ligula eget libero interdum, ut egestas velit dapibus. Donec eget arcu consectetur, pretium est ac, tempus odio. Vivamus sed risus tincidunt, sodales elit in, aliquam nulla. Vivamus rhoncus dapibus ex nec suscipit. Integer et massa tristique, varius libero eget, pharetra purus. Nunc sodales, mi sit amet gravida venenatis, sapien ipsum tristique nisl, et malesuada est magna at ex. Nam nec ligula eu purus rhoncus ultrices id sed est. Sed nec lorem id sem te"} URL={"https://thispersondoesnotexist.com/"} isLeft={true}/>
      </div>
    </div>
  );
}

const BlocFolio = ({ Text, URL, isLeft }) => {
  if (isLeft) {
    return (
      <div id="container">
        <img id="item1" src={URL} alt="Left Aligned Image"/>
        <p id="item2">{Text}</p>
      </div>
    );
  } else {
    return (
      <div id="container">
        <img id="item3" src={URL} alt="Right Aligned Image"/>
        <p id="item4">{Text}</p>
      </div>
    );
  }
}

