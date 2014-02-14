/* ---- PALETTE ---- */

@water:#00aabc;
@park:#dbd3b1;
@land:#f5fdf0;

/* -- BASE ---*/
Map {
/*  background-color: @water;
  background-image:url("images/wave.jpg");
  buffer-size: 256; */
}

#brasil {
  line-color:#594;
  line-width:3;
  polygon-opacity:0.6;
  polygon-fill:#ae8;
  polygon-pattern-file:url(images/banana.jpg);
  polygon-pattern-alignment:local;
    polygon-pattern-comp-op:screen;
}

#municipio {
  line-color:#594;
  line-width:3;
  polygon-opacity:0.8;
  polygon-fill:@land;
}


/* ---- POLITICO ADMINISTRATIVO: DENSIDADE, RENDA  ---- */
#setorescensitariosde {
  line-color:#ce9a52;
  line-width:0.2;
  polygon-opacity:.5;
  polygon-fill:#dbd3b1;
    [zoom<=15] {
      line-width:0.2;
    }
       [zoom<=13] {
      line-width:0.1;
    }
  [densidem <= 9290] { polygon-fill: #cac3a4 }
  [densidem >= 9291][densidem <= 13864.65] { polygon-fill: #c7bc8d }
  [densidem >= 13864.66][densidem <= 19081.81] { polygon-fill: #c9b76f }
  [densidem >= 19081.82][densidem <= 27469.21] { polygon-fill: #c9ad3d }
  [densidem >= 27469.21][densidem <=  101966] { polygon-fill: #c9a100 }
}

#setorescensitariosre {
  line-color:#594999;
  line-width:0.2;
  polygon-opacity:.5;
  polygon-fill:#dbd1dd;
  [zoom<=15] {
      line-width:0.2;
    }
  [zoom<=13] {
      line-width:0.1;
    }
  [rpc <= 626] { polygon-fill: #dbd1dd }
  [rpc >= 627][rpc <= 1365] { polygon-fill: #b29bb5 }
  [rpc >= 1366][rpc <= 2388] { polygon-fill: #8f7291 }
  [rpc >= 2389][rpc <= 3642] { polygon-fill: #8f6191 }
  [rpc >= 3643][rpc <= 7574] { polygon-fill: #620360 }
}

#rpa {
  line-color:#594;
  line-width:1.5;
  polygon-opacity:0;
    [RPA = 1] { polygon-fill: #ffaa00 }
    [RPA = 2] { polygon-fill: #BF8F30 }
    [RPA = 3] { polygon-fill: #ffbf40 }
    [RPA = 4] { polygon-fill: #ffd073 }
    [RPA = 5] { polygon-fill: #bf8930 }
    [RPA = 6] { polygon-fill: #ff9200 }
}

#aglomeradossubnormai {
  polygon-opacity:0.5;
  polygon-fill:#7b201c;
}

#areaspobres {
  polygon-opacity:0.6;
  polygon-fill:#bd716d;
}

#zeis {
  polygon-opacity:0.6;
  polygon-fill:#bd5550;
}

/* ---- AMBIENTAIS  ---- */
#espacoslivresexisten {
  polygon-fill:#034131;
  polygon-opacity:0.5;
}

#espacoslivresadicion {
  polygon-opacity:0.5;
  polygon-fill:#6b8655;
}

#riocapibaribe {
  polygon-fill:@water;
}

#curvas1lidart {
  line-width:0.1;
  line-color:#d2d2d2;
  polygon-opacity:0.5;
  [Contour <= 15] { polygon-fill: #dbf970 }
  [Contour >= 16][Contour <= 30] { polygon-fill: #cff93e }
  [Contour >= 31][Contour <= 45] { polygon-fill: #bdf400 }
  [Contour >= 46][Contour <= 60] { polygon-fill: #98b72e }
  [Contour >= 61][Contour <= 76] { polygon-fill: #7b9e00 }
  [Contour >= 77][Contour <= 92] { polygon-fill: #b8be2f }
  [Contour >= 93][Contour <= 108] { polygon-fill: #9ea400 }
  [Contour >= 109][Contour <= 115] { polygon-fill: #f9fe72 }
}

#faunar01 {
 	  marker-file: url(src/flora-24.svg); 
      marker-fill: #6d390f;
}

/* ---- VIAS ---- */
#primarias {
    ::case {
    line-width: 5;
    line-color:#fcba63;
  }
  ::fill {
    line-width: 3;
    line-color:#f0e9ce;
  }
   [zoom<=13] {
         ::case {
    line-width: 4;
    line-color:#fcba63;
  }
  ::fill {
    line-width: 2;
    line-color:#f0e9ce;
  }
    }
    [zoom<=12] {
         ::case {
    line-width: 3;
    line-color:#fcba63;
  }
  ::fill {
    line-width: 1;
    line-color:#f0e9ce;
  }
    }
  [zoom<=11] {
         ::case {
    line-width: 0;
    line-color:#fcba63;
  }
  ::fill {
    line-width: 0;
    line-color:#f0e9ce;
  }
    }
}

#secundarias {
    ::case {
    line-width: 3;
    line-color:#f4c58e;
  }
  ::fill {
    line-width: 2;
    line-color:#ede9d6;
  }
  [zoom<=12] {
    ::case {
    line-width: 0;
  }
  ::fill {
    line-width: 0;
  }
    }
}

#coletoras {
    line-color:#f4c58e;
  	line-width: 1.5;
    [zoom<=12] {
     line-width: 0;
  }
}

#ciclofaixaexistente {
  line-width:4;
  line-color:#ae2224;
  [zoom<=13] {
      line-width:0.7;
    }
}

#planodiretorciclovia {  
  ::line {
    line-width: 4;
    line-color: #df8426;
  }
  ::dash {
    line-color: #fff;
    line-width: 2.5;
    line-dasharray: 6, 6;
  }
  [zoom<=13] {
    ::line {
    line-width: 2;
    line-color: #df8426;
  }
  ::dash {
    line-color: #fff;
    line-width: 1;
    line-dasharray: 4, 4;
  }
    }
}

/* ---- PONTOS ---- */
#estacoesbike {
 marker-file: url(src/bikes-24.svg); 
 marker-fill: #ab370f;
}

#estacoespluviais {
 marker-file: url(src/barcobus-24.svg); 
      marker-fill: #364c68;
}

#escolas {
 marker-file: url(src/escola-24.svg); 
      marker-fill: #e28e26;
}

#centralidades {
 marker-fill: transparent;
  marker-opacity: 1.0;
  marker-width: 27;
  marker-line-color: #f4a365;
  marker-line-width: 24;
  marker-line-opacity: 0.03;
  marker-placement: point;
  marker-type: ellipse;
  marker-allow-overlap: true;
  [zoom<=15] {
   marker-width: 20;
   marker-line-width: 18;
    }
   [zoom<=13] {
   marker-width: 9;
   marker-line-width: 6;
    }
}

#centralidades::magenta {
  marker-fill: #e0600b;
  marker-opacity: 0.04;
  marker-width:18;
  marker-line-color: white;
  marker-line-width: 0;
  marker-line-opacity: 0.0;
  marker-placement: point;
  marker-type: ellipse;
  marker-allow-overlap: true;
   [zoom<=15] {
   marker-width: 14;
   marker-line-width: 12;
    }
    [zoom<=13] {
   marker-width: 7;
   marker-line-width: 5;
    }
}

/* --- Patrimonio --- */
#zeph {
 polygon-fill: #a66f00;
  polygon-opacity: 0.3;
}

#areadoprojeto500m {
  polygon-opacity:0.4;
  polygon-fill:#b2bca4;
}


#quadras500m {
  polygon-opacity:0.3;
  polygon-fill:#364c68;
}
