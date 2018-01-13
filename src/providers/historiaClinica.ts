import { Injectable } from '@angular/core';


@Injectable()
export class HistoriaClinicaData {

  dataPersonales: DatFamiliares[];
  dataFamiliares: DatFamiliares[];
  dataRevSistemas: DatFamiliares[];
  dataExmFisico: DatFamiliares[];
  dataParaclinicos: DatParaclinico[];
  dataFactProctectores: DatParaclinico[];
  dataProbleActuales: DatFamiliares[];
  dataAntGineco:DatGineco[];
  dataEnfAct1:DatGineco[];
  dataEnfAct2:DatGineco[];
  dataEnfAct3:DatGineco[];
  dataEnfAct4:DatGineco[];
  dataEnfAct5:DatGineco[];

  constructor() {
    this.loadDataAntFam();
    this.loadDataAntPer();
    this.loadDataRevSis();
    this.loadDataExmFis();
    this.loadDataParacl();
    this.loadDataFactPro();
    this.loadDataProbleAct();
    this.loadDataAntGineco();
    this.loadDataEnfAct1();
  }

  loadDataAntFam() {
    this.dataFamiliares = [
      { nombreant: "HTA", antecedente: false, observacion: "" },
      { nombreant: "E.ENDOCRINA", antecedente: false, observacion: "" },
      { nombreant: "CA.COLON", antecedente: false, observacion: "" },
      { nombreant: "DIABETES", antecedente: false, observacion: "" },
      { nombreant: "ENF.RENAL", antecedente: false, observacion: "" },
      { nombreant: "GU y PROST", antecedente: false, observacion: "" },
      { nombreant: "DISLIPIDEMIA", antecedente: false, observacion: "" },
      { nombreant: "OBESIDAD", antecedente: false, observacion: "" },
      { nombreant: "CA.GASTR", antecedente: false, observacion: "" },
      { nombreant: "E.CORONARIA", antecedente: false, observacion: "" },
      { nombreant: "E.VASCULAR", antecedente: false, observacion: "" },
      { nombreant: "CA.MAMA", antecedente: false, observacion: "" },
      { nombreant: "GO y CERVIX", antecedente: false, observacion: "" },
    ];
  }


  loadDataAntPer() {
    this.dataPersonales = [
      { nombreant: "HTA", antecedente: false, observacion: "" },
      { nombreant: "TABAQUISMO", antecedente: false, observacion: "" },
      { nombreant: "ACV", antecedente: false, observacion: "" },
      { nombreant: "HVI", antecedente: false, observacion: "" },
      { nombreant: "DIABETES", antecedente: false, observacion: "" },
      { nombreant: "E.RENAL", antecedente: false, observacion: "" },
      { nombreant: "EPOC", antecedente: false, observacion: "" },
      { nombreant: "CA.GASTR", antecedente: false, observacion: "" },
      { nombreant: "DISLIPIDEM.", antecedente: false, observacion: "" },
      { nombreant: "OBESIDAD", antecedente: false, observacion: "" },
      { nombreant: "ASMA", antecedente: false, observacion: "" },
      { nombreant: "CA.MAMA", antecedente: false, observacion: "" },
      { nombreant: "E.CORONARIA", antecedente: false, observacion: "" },
      { nombreant: "E.VASCULAR", antecedente: false, observacion: "" },
      { nombreant: "QUIRURGICOS", antecedente: false, observacion: "" },
      { nombreant: "EPIMIOLOG.", antecedente: false, observacion: "" },
      { nombreant: "TRAUMAS", antecedente: false, observacion: "" },
      { nombreant: "CA.CERVIX", antecedente: false, observacion: "" },
      { nombreant: "ALERGICOS", antecedente: false, observacion: "" },
      { nombreant: "F.REUMATICA", antecedente: false, observacion: "" },
      { nombreant: "ETS", antecedente: false, observacion: "" },
      { nombreant: "LEISHMANIAS.", antecedente: false, observacion: "" },
      { nombreant: "LEPRA", antecedente: false, observacion: "" },
      { nombreant: "MALARIA", antecedente: false, observacion: "" },
      { nombreant: "DENGUE", antecedente: false, observacion: "" },
      { nombreant: "F.AMARILLA", antecedente: false, observacion: "" },
      { nombreant: "TUBERCULOS.", antecedente: false, observacion: "" },
      { nombreant: "E.ENDOCRINA", antecedente: false, observacion: "" },
      { nombreant: "GENITOURI.", antecedente: false, observacion: "" }
    ]
  }
  loadDataRevSis() {
    this.dataRevSistemas = [
      { nombreant: "ORL", antecedente: false, observacion: "" },
      { nombreant: "S.RESPIRATORIO", antecedente: false, observacion: "" },
      { nombreant: "S.CARDIO", antecedente: false, observacion: "" },
      { nombreant: "S.GASTROINT", antecedente: false, observacion: "" },
      { nombreant: "S.GENITOURI", antecedente: false, observacion: "" },
      { nombreant: "S.OSTEOMUSCU", antecedente: false, observacion: "" },
      { nombreant: "SNC", antecedente: false, observacion: "" },
      { nombreant: "S.ENDOCRINO", antecedente: false, observacion: "" },
      { nombreant: "PIEL y FANE.", antecedente: false, observacion: "" },
    ]
  }
  loadDataExmFis() {
    this.dataExmFisico = [
      { nombreant: "EST.GENERAL", antecedente: false, observacion: "" },
      { nombreant: "CABEZA", antecedente: false, observacion: "" },
      { nombreant: "OJOS", antecedente: false, observacion: "" },
      { nombreant: "BOCA", antecedente: false, observacion: "" },
      { nombreant: "CUELLO", antecedente: false, observacion: "" },
      { nombreant: "TORAX", antecedente: false, observacion: "" },
      { nombreant: "CORAZON", antecedente: false, observacion: "" },
      { nombreant: "PULMONES", antecedente: false, observacion: "" },
      { nombreant: "ABDOMEN", antecedente: false, observacion: "" },
      { nombreant: "GENITOURI", antecedente: false, observacion: "" },
      { nombreant: "EXTREMIDADES", antecedente: false, observacion: "" },
      { nombreant: "NEUROLOGICO", antecedente: false, observacion: "" },
      { nombreant: "MUSCULOESQUE", antecedente: false, observacion: "" },
      { nombreant: "PIEL", antecedente: false, observacion: "" },
    ]
  }
  loadDataProbleAct() {
    this.dataProbleActuales = [
      { nombreant: "DIARREA", antecedente: false, observacion: "" },
      { nombreant: "ESTREÑIMIENTO", antecedente: false, observacion: "" },
      { nombreant: "GASTRITIS", antecedente: false, observacion: "" },
      { nombreant: "ULCERA", antecedente: false, observacion: "" },
      { nombreant: "NAUSEAS", antecedente: false, observacion: "" },
      { nombreant: "PIROSIS", antecedente: false, observacion: "" },
      { nombreant: "VOMITO", antecedente: false, observacion: "" },
      { nombreant: "COLITIS", antecedente: false, observacion: "" },
      { nombreant: "DENTADURA", antecedente: false, observacion: "" },
      { nombreant: "OTROS", antecedente: false, observacion: "" },
      { nombreant: "DIAGNÓSTICO ENF", antecedente: false, observacion: "" },
      { nombreant: "ENF. IMPORTANTE", antecedente: false, observacion: "" },
      { nombreant: "MEDICAMENTOS", antecedente: false, observacion: "" },
      { nombreant: "LAXANTES", antecedente: false, observacion: "" },
      { nombreant: "DIURÉTICOS", antecedente: false, observacion: "" },
      { nombreant: "ANTIÁCIDOS", antecedente: false, observacion: "" },
      { nombreant: "ANALGESICOS", antecedente: false, observacion: "" },
    ]
  }

  loadDataParacl() {
    this.dataParaclinicos = [
      { nombre: "Hemograma", solicitado: false },
      { nombre: "Gli.Basal", solicitado: false },
      { nombre: "Hemo.Glicolizada", solicitado: false },
      { nombre: "Colesterol Total", solicitado: false },
      { nombre: "Trigliceridos", solicitado: false },
      { nombre: "HDL", solicitado: false },
      { nombre: "LDL", solicitado: false },
      { nombre: "Parcial de Orina", solicitado: false },
      { nombre: "Creatinina Serica", solicitado: false },
      { nombre: "Microalbuliminuria", solicitado: false },
      { nombre: "Electrocardiograma", solicitado: false },
      { nombre: "Ecocardiograma", solicitado: false },
      { nombre: "Depuracion de Creatinina", solicitado: false },
    ]
  }
  loadDataFactPro() {
    this.dataFactProctectores = [
      { nombre: "5 frutas y verduras al dia", solicitado: false },
      { nombre: "Reducción Ingesta Cal", solicitado: false },
      { nombre: "Consumo Alcohol", solicitado: false },
      { nombre: "Dieta Baja Grasa", solicitado: false },
      { nombre: "Act.Física (OMS)", solicitado: false },
      { nombre: "Consumo Tabaco", solicitado: false },
      { nombre: "Manejo Estres y ansiedad", solicitado: false },
      { nombre: "Dieta Baja Sal", solicitado: false },
      { nombre: "Dieta Baja Azucar", solicitado: false },
      { nombre: "Control Peso", solicitado: false },
      { nombre: "Comunicacion IntraFamiliar", solicitado: false },
      { nombre: "Auto-Examen Seno", solicitado: false },
      { nombre: "Auto-Examen Testiculo", solicitado: false },
      { nombre: "Cumplir citas", solicitado: false },
      { nombre: "Realizacion Citologia", solicitado: false },
    ]
  }
  loadDataAntGineco() {
    this.dataAntGineco = [
      { nombre: "Menarquia:",antecedente:""},
      { nombre: "FUM:",antecedente:""},
      { nombre: "Menopausia:",antecedente:""},
      { nombre: "G:",antecedente:""},
      { nombre: "P:",antecedente:""},
      { nombre: "A:",antecedente:""},
      { nombre: "C:",antecedente:""},
      { nombre: "Planificación familiar:",antecedente:"",},
      { nombre: "Método:",antecedente:""},
      { nombre: "Tiempo:",antecedente:""},

      
    ]
  }

  //Enfermedad actual partes:
  loadDataEnfAct1() {
    this.dataEnfAct1 = [
      { nombre: "Apetito:",antecedente:""},
      { nombre: "Habito intestinal",antecedente:""},
      { nombre: "Deglución",antecedente:""},
      { nombre: "Masticación:",antecedente:""},
    ]
    this.dataEnfAct2 = [
      { nombre: "INTOLERANCIAS/ALERGIAS:",antecedente:""},
      { nombre: "SINTOMAS GASTROINTESTINALES",antecedente:""},
      { nombre: "ALIMENTOS FAVORITOS:",antecedente:""},
      { nombre: "ALIMENTOS RECHAZADOS:",antecedente:""},
      { nombre: "CONSUMO GRASAS SATURADAS:",antecedente:""},
      { nombre: "SUPLEMENTO NUTRICIONAL:",antecedente:""},
    ]
    this.dataEnfAct3 = [
      { nombre: "Comidas al dia:",antecedente:""},
      { nombre: "Porciones de fruta/día:",antecedente:""},
      { nombre: "Porciones de verdura/día::",antecedente:""},
      { nombre: "Vasos de agua/día:",antecedente:""},
    ]
    this.dataEnfAct4 = [
      { nombre: "Tipo:",antecedente:""},
      { nombre: "Frecuencia:",antecedente:""},
      { nombre: "Horas:",antecedente:""},
      { nombre: "Minutos:",antecedente:""},
      { nombre: "Clasificación",antecedente:""},
    ]
    this.dataEnfAct5 = [
      { nombre: "Alcohol:",antecedente:""},
      { nombre: "Cigarrillos:",antecedente:""},
      { nombre: "Café:",antecedente:""},
    ]
   




  }


}

export class DatFamiliares {
  nombreant: string;
  antecedente: boolean;
  observacion: string;
}

export class DatGineco {
  nombre: string;
  antecedente: string;
  
}

export class DatParaclinico {
  nombre: string;
  solicitado: boolean;
}




