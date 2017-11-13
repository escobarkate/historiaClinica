import { Injectable } from '@angular/core';


@Injectable()
export class HistoriaClinicaData {

  dataPersonales: DatFamiliares[];
  dataFamiliares: DatFamiliares[];
              
  constructor() {
    this.loadDataAntFam();
    this.loadDataAntPer();
  }

  loadDataAntFam() {
    this.dataFamiliares = [
          {nombreant:"HTA",antecedente:false,observacion:""},
          {nombreant:"E.ENDOCRINA",antecedente:false,observacion:""},
          {nombreant:"CA.COLON",antecedente:false,observacion:""},
          {nombreant:"DIABETES",antecedente:false,observacion:""},
          {nombreant:"ENF.RENAL",antecedente:false,observacion:""},
          {nombreant:"GU y PROST",antecedente:false,observacion:""},
          {nombreant:"DISLIPIDEMIA",antecedente:false,observacion:""},
          {nombreant:"OBESIDAD",antecedente:false,observacion:""},
          {nombreant:"CA.GASTR",antecedente:false,observacion:""},
          {nombreant:"E.CORONARIA",antecedente:false,observacion:""},
          {nombreant:"E.VASCULAR",antecedente:false,observacion:""},
          {nombreant:"CA.MAMA",antecedente:false,observacion:""},
          {nombreant:"GO y CERVIX",antecedente:false,observacion:""},
    ];
  }
  loadDataAntPer() {
      this.dataPersonales = [
          {nombreant:"HTA",antecedente:false,observacion:""},
          {nombreant:"TABAQUISMO",antecedente:false,observacion:""},
          {nombreant:"ACV",antecedente:false,observacion:""},
          {nombreant:"HVI",antecedente:false,observacion:""},
          {nombreant:"DIABETES",antecedente:false,observacion:""},
          {nombreant:"E.RENAL",antecedente:false,observacion:""},
          {nombreant:"EPOC",antecedente:false,observacion:""},
          {nombreant:"CA.GASTR",antecedente:false,observacion:""},
          {nombreant:"DISLIPIDEM.",antecedente:false,observacion:""},
          {nombreant:"OBESIDAD",antecedente:false,observacion:""},
          {nombreant:"ASMA",antecedente:false,observacion:""},
          {nombreant:"CA.MAMA",antecedente:false,observacion:""},
          {nombreant:"E.CORONARIA",antecedente:false,observacion:""},
          {nombreant:"E.VASCULAR",antecedente:false,observacion:""},
          {nombreant:"QUIRURGICOS",antecedente:false,observacion:""},
          {nombreant:"EPIMIOLOG.",antecedente:false,observacion:""},
          {nombreant:"TRAUMAS",antecedente:false,observacion:""},
          {nombreant:"CA.CERVIX",antecedente:false,observacion:""},
          {nombreant:"ALERGICOS",antecedente:false,observacion:""},
          {nombreant:"F.REUMATICA",antecedente:false,observacion:""},
          {nombreant:"ETS",antecedente:false,observacion:""},
          {nombreant:"LEISHMANIAS.",antecedente:false,observacion:""},
          {nombreant:"LEPRA",antecedente:false,observacion:""},
          {nombreant:"MALARIA",antecedente:false,observacion:""},
          {nombreant:"DENGUE",antecedente:false,observacion:""},
          {nombreant:"F.AMARILLA",antecedente:false,observacion:""},
          {nombreant:"TUBERCULOS.",antecedente:false,observacion:""},
          {nombreant:"E.ENDOCRINA",antecedente:false,observacion:""},
          {nombreant:"GENITOURI.",antecedente:false,observacion:""}
      ]
  }
    
}

export class DatFamiliares{
  nombreant:string;
  antecedente:boolean;
  observacion:string;  
}

export class DatFarmacologicos {
    medprevia:string;
    prof:string;
    adherencia:boolean;
    alergia:boolean;
    alergias:string;
}

export class DatReportExamen{
    tipo:string;
    fecha:string;
    resultado:string;
}

export class DatPrincipales{
    nombreAcu:string;
    parentesco:string;
    telefono:number;
    tipoConsul:string;
    motivo:string;
    enfActual:string;
}

