import {DatReportExamen} from '../pages/historia_clinica/reporte-examenes/reporte-examenes';
import {DatFarmacologicos} from '../pages/historia_clinica/ant-farmacologicos/ant-farmacologicos';
import {DatFamiliares, DatParaclinico} from '../providers/historiaClinica';
import {DatMoriski} from '../pages/historia_clinica/morisky/morisky';
import {DatViolencia} from '../pages/historia_clinica/violencia-intra/violencia-intra';
import {DatDiagnostico} from '../pages/historia_clinica/diagnostico/diagnostico';
import {DatSolValoracion} from '../pages/historia_clinica/sol-valoracion/sol-valoracion';
import {DatObservaciones} from '../pages/historia_clinica/observaciones/observaciones';
import {DatPrincipales} from '../pages/historia_clinica/datos-principales/historia';
import {DatNofarma} from '../pages/historia_clinica/no-farma/no-farma';

export class historiaClinica {
     constructor(datRep: DatReportExamen,datfa:DatFamiliares, datFar:DatFarmacologicos,
    datPara:DatParaclinico, datMor: DatMoriski, datVio: DatViolencia, datDia: DatDiagnostico,
    datSol: DatSolValoracion, datObs: DatObservaciones, datPrin: DatPrincipales,datNoF: DatNofarma
){


     }
}