import {DatReportExamen} from '../pages/historia_clinica/RCV/reporte-examenes/reporte-examenes';
import {DatFarmacologicos} from '../pages/historia_clinica/RCV/ant-farmacologicos/ant-farmacologicos';
import {DatFamiliares, DatParaclinico} from '../providers/historiaClinica';
import {DatMoriski} from '../pages/historia_clinica/RCV/morisky/morisky';
import {DatViolencia} from '../pages/historia_clinica/RCV/violencia-intra/violencia-intra';
import {DatDiagnostico} from '../pages/historia_clinica/RCV/diagnostico/diagnostico';
import {DatSolValoracion} from '../pages/historia_clinica/RCV/sol-valoracion/sol-valoracion';
import {DatObservaciones} from '../pages/historia_clinica/RCV/observaciones/observaciones';
import {DatPrincipales} from '../pages/historia_clinica/RCV/datos-principales/historia';
import {DatNofarma} from '../pages/historia_clinica/RCV/no-farma/no-farma';

export class historiaClinica {
     constructor(datRep: DatReportExamen,datfa:DatFamiliares, datFar:DatFarmacologicos,
    datPara:DatParaclinico, datMor: DatMoriski, datVio: DatViolencia, datDia: DatDiagnostico,
    datSol: DatSolValoracion, datObs: DatObservaciones, datPrin: DatPrincipales,datNoF: DatNofarma
){


     }
}