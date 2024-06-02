import WSPGallery from '../components/WSPGallery'
import Tekst8 from '../components/Tekst8'
import Footer from '../components/Footer'
import Link from 'next/link';
function App() {

  const galleryImages = [
    {
      img: 'https://static.wixstatic.com/media/249d52_5df58e7046c74c02bdd73187c33d1f7b.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_5df58e7046c74c02bdd73187c33d1f7b.jpg'
    },
    {
      img: "https://static.wixstatic.com/media/249d52_c629b860772041b0bade4915cf92a9ec.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_c629b860772041b0bade4915cf92a9ec.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_6b1517a47b344840a1f18abb711a1277.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_6b1517a47b344840a1f18abb711a1277.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_0d0714f5369a46e78a3ce9ef6e5a4efd.jpg/v1/fill/w_338,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_0d0714f5369a46e78a3ce9ef6e5a4efd.jpg"
    },

    {
      img: "https://static.wixstatic.com/media/249d52_f3359026534344dfb265265b28f806cd.jpg/v1/fill/w_393,h_715,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_f3359026534344dfb265265b28f806cd.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_606ca2a979de4090921bea1c89405d24.jpg/v1/fill/w_217,h_395,al_c,q_80,enc_auto/249d52_606ca2a979de4090921bea1c89405d24.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_0cdc1ef6a4f440258256896005844de2.jpg/v1/fill/w_960,h_540,al_c,q_85,enc_auto/249d52_0cdc1ef6a4f440258256896005844de2.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_be46a859ccae462c9c46a670ff752f39.jpg/v1/fill/w_960,h_540,al_c,q_85,enc_auto/249d52_be46a859ccae462c9c46a670ff752f39.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_be46a859ccae462c9c46a670ff752f39.jpg/v1/fill/w_960,h_540,al_c,q_85,enc_auto/249d52_be46a859ccae462c9c46a670ff752f39.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_7a9b281b5d924ab0aa1219109ce37925.jpg/v1/fill/w_960,h_540,al_c,q_85,enc_auto/249d52_7a9b281b5d924ab0aa1219109ce37925.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_d65000d109b64f1782f1983ca70deee2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_d65000d109b64f1782f1983ca70deee2.jpg"
    },



    {
      img: "https://static.wixstatic.com/media/249d52_7c67fbcee90b417a840cd7d6b5098b24.jpg/v1/fill/w_960,h_540,al_c,q_85,enc_auto/249d52_7c67fbcee90b417a840cd7d6b5098b24.jpg"
    },

    {
      img: "https://static.wixstatic.com/media/249d52_9e35fdab4e004aa39f77fe1f646b989d.jpg/v1/fill/w_480,h_270,al_c,q_80,enc_auto/249d52_9e35fdab4e004aa39f77fe1f646b989d.jpg"
    },

    {
      img: "https://static.wixstatic.com/media/249d52_8b6c02d558814e78b008645bed982535.jpg/v1/fill/w_402,h_715,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_8b6c02d558814e78b008645bed982535.jpg"
    },

    {
      img: "https://static.wixstatic.com/media/249d52_9498e885bc3643aba19b4921631a9b84.jpg/v1/fill/w_600,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_9498e885bc3643aba19b4921631a9b84.jpg"
    },

    {
      img: "https://static.wixstatic.com/media/249d52_b11077a8fd284e8eb6b3128d5f82bca1.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_b11077a8fd284e8eb6b3128d5f82bca1.jpg"
    },



    {
      img: "https://static.wixstatic.com/media/249d52_7c67fbcee90b417a840cd7d6b5098b24.jpg/v1/fill/w_960,h_540,al_c,q_85,enc_auto/249d52_7c67fbcee90b417a840cd7d6b5098b24.jpg"
    },

    {
      img: "https://static.wixstatic.com/media/249d52_9e35fdab4e004aa39f77fe1f646b989d.jpg/v1/fill/w_480,h_270,al_c,q_80,enc_auto/249d52_9e35fdab4e004aa39f77fe1f646b989d.jpg"
    },

    {
      img: "https://static.wixstatic.com/media/249d52_8b6c02d558814e78b008645bed982535.jpg/v1/fill/w_402,h_715,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_8b6c02d558814e78b008645bed982535.jpg"
    },

    {
      img: "https://static.wixstatic.com/media/249d52_9498e885bc3643aba19b4921631a9b84.jpg/v1/fill/w_600,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_9498e885bc3643aba19b4921631a9b84.jpg"
    },

    {
      img: "https://static.wixstatic.com/media/249d52_b11077a8fd284e8eb6b3128d5f82bca1.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_b11077a8fd284e8eb6b3128d5f82bca1.jpg"
    },






    {
      img: "https://static.wixstatic.com/media/249d52_7c67fbcee90b417a840cd7d6b5098b24.jpg/v1/fill/w_960,h_540,al_c,q_85,enc_auto/249d52_7c67fbcee90b417a840cd7d6b5098b24.jpg"
    },

    {
      img: "https://static.wixstatic.com/media/249d52_9e35fdab4e004aa39f77fe1f646b989d.jpg/v1/fill/w_480,h_270,al_c,q_80,enc_auto/249d52_9e35fdab4e004aa39f77fe1f646b989d.jpg"
    },

    {
      img: "https://static.wixstatic.com/media/249d52_8b6c02d558814e78b008645bed982535.jpg/v1/fill/w_402,h_715,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_8b6c02d558814e78b008645bed982535.jpg"
    },

    {
      img: "https://static.wixstatic.com/media/249d52_9498e885bc3643aba19b4921631a9b84.jpg/v1/fill/w_600,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_9498e885bc3643aba19b4921631a9b84.jpg"
    },

    {
      img: "https://static.wixstatic.com/media/249d52_b11077a8fd284e8eb6b3128d5f82bca1.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_b11077a8fd284e8eb6b3128d5f82bca1.jpg"
    },

    {
      img: "https://static.wixstatic.com/media/249d52_99c911dae37340b0b7e2b60fc9d91f3d.jpg/v1/fill/w_953,h_715,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/249d52_99c911dae37340b0b7e2b60fc9d91f3d.jpg"
    },

    
    {
      img: "https://static.wixstatic.com/media/249d52_4498999d15d14b8a9efbff2693ddcf18.jpg/v1/fill/w_953,h_715,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/249d52_4498999d15d14b8a9efbff2693ddcf18.jpg"
    },

    { 
      img: "https://static.wixstatic.com/media/249d52_94d7ac2dc143448ebcacc3ffc51ebe11.jpg/v1/fill/w_953,h_715,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/249d52_94d7ac2dc143448ebcacc3ffc51ebe11.jpg"
    },


    { 
      img: "https://static.wixstatic.com/media/249d52_7bbbec98a6fd44b0b058ee270f6f88d0.jpg/v1/fill/w_378,h_672,al_c,lg_1,q_80,enc_auto/249d52_7bbbec98a6fd44b0b058ee270f6f88d0.jpg"
    },

    { 
      img: "https://static.wixstatic.com/media/249d52_6f23380a7a0d455d911746743b5d5b70.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_6f23380a7a0d455d911746743b5d5b70.jpg"
    },

    { 
      img: "https://static.wixstatic.com/media/249d52_9f4bbba0641c4cf8bad6f405b029d968.jpg/v1/fill/w_338,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_9f4bbba0641c4cf8bad6f405b029d968.jpg"
    },

    { 
      img: "https://static.wixstatic.com/media/249d52_7497b22914a04b0897fc949ecabf5fa4.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_7497b22914a04b0897fc949ecabf5fa4.jpg"
    },
    
   
    { 
      img: "https://static.wixstatic.com/media/249d52_180a6116195146408d0fcdd41a405bc2.jpg/v1/fill/w_536,h_715,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/249d52_180a6116195146408d0fcdd41a405bc2.jpg"
    },

    { 
      img: "https://static.wixstatic.com/media/249d52_29791a5c6f0f43f293f0319275f53c3f.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_29791a5c6f0f43f293f0319275f53c3f.jpg"
    },

    { 
      img: "https://static.wixstatic.com/media/249d52_fd1cc43ffc05464aa4b1b82e98dd4c7a.jpg/v1/fill/w_366,h_206,al_c,q_80,enc_auto/249d52_fd1cc43ffc05464aa4b1b82e98dd4c7a.jpg"
    },

    

    {
      img:"https://static.wixstatic.com/media/249d52_207a7b0844f5419f913742cafab55866.jpg/v1/fill/w_960,h_540,al_c,q_85,enc_auto/249d52_207a7b0844f5419f913742cafab55866.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_9897c54301fc455897a7ccf4aa819cb7.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_9897c54301fc455897a7ccf4aa819cb7.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_d3b45232399647c581c4632f2af04d99.jpg/v1/fill/w_960,h_540,al_c,q_85,enc_auto/249d52_d3b45232399647c581c4632f2af04d99.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_c1e5fe189e6a4f2faecff9cab5dd9ae2.jpg/v1/fill/w_960,h_540,al_c,q_85,enc_auto/249d52_c1e5fe189e6a4f2faecff9cab5dd9ae2.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_0487ff7c9c9e4179b0f8c8de7433cc0e.jpg/v1/fill/w_720,h_540,al_c,lg_1,q_85,enc_auto/249d52_0487ff7c9c9e4179b0f8c8de7433cc0e.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_4b60cbf283e24c90bc2d46765ce9d8d0.jpg/v1/fill/w_536,h_715,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/249d52_4b60cbf283e24c90bc2d46765ce9d8d0.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_0fe9c10b0adf44ffbe04eef6fb34cd11.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_0fe9c10b0adf44ffbe04eef6fb34cd11.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_c716a27c7e77427ba78449912c110298.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_c716a27c7e77427ba78449912c110298.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_52712b7d599c4c09b9ca397865726da6.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_52712b7d599c4c09b9ca397865726da6.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_860ad177a77a4b72a8c528b101552270.jpg/v1/fill/w_536,h_715,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/249d52_860ad177a77a4b72a8c528b101552270.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_900bfdf9c36a4ecda1ee92836eea8c00.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_900bfdf9c36a4ecda1ee92836eea8c00.jpg"
    },

    {
      img:"https://static.wixstatic.com/media/249d52_e464b7a1c526479ba049887b251ff5b5.jpg/v1/fill/w_338,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_e464b7a1c526479ba049887b251ff5b5.jpg"
    },

    {
      img:"https://static.wixstatic.com/media/249d52_6e81a2a3533743b1852d465d60284a2e.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_6e81a2a3533743b1852d465d60284a2e.jpg"
    },

    {
      img:"https://static.wixstatic.com/media/249d52_a13f28bc7caf4e4f9beb3fcb7ff9e9fb.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_a13f28bc7caf4e4f9beb3fcb7ff9e9fb.jpg"
    },

    {
      img:"https://static.wixstatic.com/media/249d52_8690c8635d2949c9971fc88db195fb42.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_8690c8635d2949c9971fc88db195fb42.jpg"
    },

    {
      img:"https://static.wixstatic.com/media/249d52_303102fbc7c14c8889ee42fca16a6c0e.jpg/v1/fill/w_338,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_303102fbc7c14c8889ee42fca16a6c0e.jpg"
    },

    {
      img:"https://static.wixstatic.com/media/249d52_08999b77c0804930a7b5a28c123c0eae.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_08999b77c0804930a7b5a28c123c0eae.jpg"
    },

    {
      img:"https://static.wixstatic.com/media/249d52_a13f28bc7caf4e4f9beb3fcb7ff9e9fb.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_a13f28bc7caf4e4f9beb3fcb7ff9e9fb.jpg"
    },

    {
      img:"https://static.wixstatic.com/media/249d52_3b4baac0951f4ba7981847688ba71e62.jpg/v1/fill/w_338,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_3b4baac0951f4ba7981847688ba71e62.jpg"
    },

    {
      img:"https://static.wixstatic.com/media/249d52_689b62874db242448149e09f1660c5c1.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_689b62874db242448149e09f1660c5c1.jpg"
    },

    {
      img:"https://static.wixstatic.com/media/249d52_e1440cfa008241e4bbb6872478b13401.jpg/v1/fill/w_600,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_e1440cfa008241e4bbb6872478b13401.jpg"
    },

    {
      img:"https://static.wixstatic.com/media/249d52_42876509f1604c05ab76f8b9ce54cb27.jpg/v1/fill/w_960,h_540,al_c,q_85,enc_auto/249d52_42876509f1604c05ab76f8b9ce54cb27.jpg"
    },

    {
      img:"https://static.wixstatic.com/media/249d52_3d2f926c1b3b4fd6a045787c3c7ab8f3.jpg/v1/fill/w_960,h_540,al_c,q_85,enc_auto/249d52_3d2f926c1b3b4fd6a045787c3c7ab8f3.jpg"
    },

    {
      img:"https://static.wixstatic.com/media/249d52_9e75d602a06d4f1aabacf39b561b76c4.jpg/v1/fill/w_720,h_540,al_c,lg_1,q_85,enc_auto/249d52_9e75d602a06d4f1aabacf39b561b76c4.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_26a1de8860d34a82b2c1f70d68454691.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_26a1de8860d34a82b2c1f70d68454691.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_068f4f8cd7ce4a188cf5648307e99846.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_068f4f8cd7ce4a188cf5648307e99846.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_c1850b025f46408795baab645795c33e.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_c1850b025f46408795baab645795c33e.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_0503827619a04013834fc9d6a8e4e277.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_0503827619a04013834fc9d6a8e4e277.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_3e3346294a4149ed803c20ac443cf576.jpg/v1/fill/w_338,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_3e3346294a4149ed803c20ac443cf576.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_019f6b41fc4843a4b336f7f473f96438.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_019f6b41fc4843a4b336f7f473f96438.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_cf8437b63d284e83b7c4c77623d84457.jpg/v1/fill/w_536,h_715,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/249d52_cf8437b63d284e83b7c4c77623d84457.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_3b862fdd09524c1884b672e27c560959.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_3b862fdd09524c1884b672e27c560959.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_50ac0920333c4c2f89a7e35c81b5ee95.jpg/v1/fill/w_338,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_50ac0920333c4c2f89a7e35c81b5ee95.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_73ec2786b31841178ff7034dd2490042.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_73ec2786b31841178ff7034dd2490042.jpg"
    },
    {
      img:"https://static.wixstatic.com/media/249d52_0dcc4cb480c84eb6b29e0f9723923153.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_0dcc4cb480c84eb6b29e0f9723923153.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_9a413747ea394655b119740a4759b561.jpg/v1/fill/w_338,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_9a413747ea394655b119740a4759b561.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_8c3e30da393a4122b9b40c298306bfc2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_8c3e30da393a4122b9b40c298306bfc2.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_7e215afa36eb4a5ba3be6bfa6c0f2d38.jpg/v1/fill/w_600,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_7e215afa36eb4a5ba3be6bfa6c0f2d38.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_dcdcfe49e7434d4f979a80bfd5db0493.jpg/v1/fill/w_699,h_524,al_c,lg_1,q_85,enc_auto/249d52_dcdcfe49e7434d4f979a80bfd5db0493.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_f2e7d1c033a945efbbc3b18609df90c6.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_f2e7d1c033a945efbbc3b18609df90c6.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_f4eed7cfe6914cc58a2ab4748fad09fe.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_f4eed7cfe6914cc58a2ab4748fad09fe.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_565f0fc309a64d8a80ccc1badf72e7a1.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_565f0fc309a64d8a80ccc1badf72e7a1.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_2330ca3fbcf9400ab21ca6bbee4cd2e5.jpg/v1/fill/w_338,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_2330ca3fbcf9400ab21ca6bbee4cd2e5.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_d25e52e7293446e1b8f5e550b407c5f3.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_d25e52e7293446e1b8f5e550b407c5f3.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_16f21026d34e4fe4b6fffe37b57c9c52.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_16f21026d34e4fe4b6fffe37b57c9c52.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_26a1de8860d34a82b2c1f70d68454691.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_26a1de8860d34a82b2c1f70d68454691.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_884f0ad07fd64feeade6cb6a47e2a942.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_884f0ad07fd64feeade6cb6a47e2a942.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_46ced98bc2874505b7522de2d71f51c0.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_46ced98bc2874505b7522de2d71f51c0.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_3738447fe2694e33a6be8d8e6ca47355.jpg/v1/fill/w_600,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_3738447fe2694e33a6be8d8e6ca47355.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_64428505127267f0915519f8db283547.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_64428505127267f0915519f8db283547.jpg"
    },
    {
      img: "https://static.wixstatic.com/media/249d52_d7a9b5c56773efed6fab4120f59775f6.jpg/v1/fill/w_600,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_d7a9b5c56773efed6fab4120f59775f6.jpg"
    },
    {
      img:"https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/445508002_974164738044550_3807328322555027578_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K0v-CqAiaYcQ7kNvgFn1tVx&_nc_ht=scontent-waw2-2.xx&oh=00_AYBLMBL6dtKl1xdKOowA0aGGZw9s3pkTZDd37Fq4h7JAGA&oe=6662310B"
    },



  ]

  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl text-white text-center font-bold mt-6  mb-10 hover:text-blue-400  ">
        Studio pielęgnacji zwierząt
      </h1>
      </div>
      <Tekst8/>
      
      <WSPGallery
        galleryImages={galleryImages}
      />

<div className='flex justify-center'>
            <img src="negro.webp" className="photostyle2 mt-12" alt="Image 1"/>
          </div>
          <div className="flex justify-center items-center mt-10 mb-10">
          <Link href="/contact">
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 hover:text-blue-400 hover:shadow-lg transition duration-300">
              Napisz do nas
            </button>
          </Link>
          </div>
          <Footer/>
    </div>
  );
}

export default App;
