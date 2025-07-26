import os
import json
from typing import List, Dict, Any
import google.generativeai as genai


#genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
genai.configure(api_key="AIzaSyAbh-JOLi_nGrci2ivLpf-FflcqvqCMXWE")


def build_legal_prompt(
    user_request: str,
    principal_doc: str,
    anexos: List[str],
    contexto: List[str],
    max_questions: int,
    experience_level: str = "junior"
) -> str:

    # Role Prompting: Definiendo el rol de abogado especializado
    # Template Prompting: Estructura organizada para extracción de hechos
    prompt = f"""
# SISTEMA DE EXTRACCIÓN DE HECHOS DE DEMANDAS

## [ROL ESPECIALIZADO] - Role Prompting aplicado
Actúa como un ABOGADO LITIGANTE SENIOR con 15 años de experiencia en derecho procesal civil y comercial, especializado en análisis de demandas y estrategia procesal. Tu expertise incluye:
- Identificación de hechos jurídicamente relevantes para la resolución del caso
- Evaluación de la importancia probatoria de cada hecho
- Análisis de elementos constitutivos de pretensiones legales
- Determinación de hechos controvertidos que requieren prueba

## [INSTRUCCIÓN DIRECTA] - Zero-Shot Prompting aplicado
Como abogado especialista, tu tarea es EXTRAER TODOS LOS HECHOS JURÍDICAMENTE RELEVANTES contenidos en la demanda y generar preguntas de confirmación binarias para cada hecho que sea CRÍTICO para la resolución del caso.

## [DEMANDA A PROCESAR] - Template Prompting aplicado
{principal_doc}

## [DOCUMENTOS ANEXOS] - Template Prompting aplicado"""

    # Conditional Logic: Agregando anexos solo si existen
    if anexos:
        for i, anexo in enumerate(anexos, 1):
            prompt += f"\n**Anexo {i}:** {anexo}"

    if contexto:
        prompt += "\n\n## [CONTEXTO ADICIONAL] - Template Prompting aplicado"
        for i, ctx in enumerate(contexto, 1):
            prompt += f"\n**Contexto {i}:** {ctx}"

    # Few-Shot Learning: Ejemplos del formato exacto de preguntas requerido
    prompt += f"""

## [FORMATO DE PREGUNTAS REQUERIDO] - Few-Shot Learning aplicado

Debes generar preguntas siguiendo EXACTAMENTE este formato:

**Ejemplos del formato correcto con TEXTO LITERAL y CONTEXTO COMPLETO:**

### Ejemplo 1 - Hecho con Identificación de Personas y Acciones:
- [El hecho "Juan Pérez Rodríguez, identificado con cédula de ciudadanía número 12.345.678, en su calidad de representante legal de la empresa ABC Servicios S.A.S., firmó el contrato de prestación de servicios número CON-2023-001 el día 15 de marzo de 2023 a las 10:30 AM en las oficinas ubicadas en la Calle 50 #25-30 de Bogotá" referenciado en el documento "Demanda principal" en la sección "Hechos", ¿Es cierto?]

### Ejemplo 2 - Hecho con Incumplimiento y Especificaciones Técnicas:
- [El hecho "La empresa XYZ Suministros Ltda., NIT 900.123.456-7, incumplió la entrega de los 500 productos modelo ABC-2023 acordados en el contrato CON-2023-001, los cuales debían ser entregados el día 30 de abril de 2023 antes de las 5:00 PM en el almacén principal, según lo establecido expresamente en la cláusula quinta del contrato" referenciado en el documento "Demanda principal" en la sección "Fundamentos de hecho", ¿Es cierto?]

### Ejemplo 3 - Hecho con Montos y Períodos Específicos:
- [El hecho "El monto total adeudado por concepto de servicios de consultoría empresarial prestados durante el período comprendido entre el 1 de enero de 2023 y el 31 de marzo de 2023 asciende a la suma de cincuenta millones de pesos colombianos ($50.000.000), según consta en las facturas números 001, 002 y 003 emitidas mensualmente" referenciado en el documento "Demanda principal" en la sección "Pretensiones", ¿Es cierto?]

### Ejemplo 4 - Hecho con Fechas y Procedimientos:
- [El hecho "El día 20 de mayo de 2023, mediante comunicación escrita con radicado número 2023-0456, la empresa demandada fue requerida formalmente para el cumplimiento de sus obligaciones contractuales, otorgándosele un plazo de diez (10) días hábiles para dar respuesta, término que venció el 5 de junio de 2023 sin que se hubiera recibido respuesta alguna" referenciado en el documento "Demanda principal" en la sección "Hechos", ¿Es cierto?]

### Ejemplo 5 - Hecho con Consecuencias y Perjuicios:
- [El hecho "Como consecuencia directa del incumplimiento contractual de la empresa demandada, la sociedad demandante se vio obligada a contratar con un tercero la prestación del servicio, generando sobrecostos por valor de veinte millones de pesos colombianos ($20.000.000) y un retraso de 30 días en la ejecución del proyecto principal" referenciado en el documento "Demanda principal" en la sección "Fundamentos de hecho", ¿Es cierto?]

**NOTA CRÍTICA**: 
- Las frases entre comillas deben ser COPIAS EXACTAS del texto que aparece en el documento, sin cambiar ni una sola palabra
- DEBEN incluir TODO el contexto necesario para que el hecho sea comprensible y verificable
- Si el texto original no tiene suficiente contexto, extrae una porción más amplia que sí lo tenga

## [PROCESO DE EXTRACCIÓN] - Chain of Thought + Step-Back Prompting aplicados

### Paso 1: Análisis Jurídico Fundamental - Step-Back Prompting aplicado
Antes de extraer hechos específicos, como abogado experto, reflexiona sobre:
- ¿Cuáles son los elementos constitutivos de las pretensiones planteadas en esta demanda?
- ¿Qué hechos son jurídicamente relevantes para probar cada elemento de la causa de pedir?
- ¿Qué hechos podrían ser controvertidos por la parte demandada?
- ¿Qué hechos tienen mayor valor probatorio para el éxito de las pretensiones?

### Paso 2: Identificación sistemática TEXTUAL con CONTEXTO COMPLETO - Chain of Thought aplicado
Ahora, con base en tu análisis jurídico, identifica SOLO los hechos JURÍDICAMENTE RELEVANTES:

**Criterios de Relevancia Jurídica:**
- Hechos que constituyen elementos de la causa de pedir
- Hechos que sustentan las pretensiones principales
- Hechos que establecen competencia, legitimación o capacidad
- Hechos que configuran incumplimientos contractuales o extracontractuales
- Hechos que determinan la existencia y cuantía de perjuicios
- Hechos que establecen nexos causales
- Hechos que pueden ser objeto de controversia procesal

**Proceso de Extracción:**
- Copia EXACTAMENTE el texto como aparece en el documento
- INCLUYE todo el contexto necesario para que el hecho sea comprensible y verificable
- EXTRAE frases completas que contengan toda la información relevante del hecho
- NO fragmentes el texto si esto elimina contexto importante
- NO parafrasees ni reformules las frases
- NO hagas inferencias o interpretaciones
- NO agregues información que no esté explícitamente escrita
- EXTRAE solo lo que está textualmente presente en el documento

### Paso 3: Evaluación de Relevancia Procesal - Socratic Prompting aplicado
Para cada hecho identificado, como abogado experto, evalúa su relevancia mediante estas preguntas socráticas:
- ¿Este hecho es indispensable para probar algún elemento de la causa de pedir?
- ¿La ausencia de este hecho debilitaría significativamente las pretensiones?
- ¿Este hecho podría ser controvertido por la contraparte?
- ¿Este hecho tiene valor probatorio independiente o complementa otros hechos?

### Paso 4: Generación de preguntas con TEXTO LITERAL y CONTEXTO COMPLETO - Self-Consistency aplicado
Para CADA hecho JURÍDICAMENTE RELEVANTE identificado, genera una pregunta usando el TEXTO EXACTO del documento:

**Formato de Pregunta:**
[El hecho "[TEXTO LITERAL COMPLETO CON CONTEXTO]" referenciado en el documento "[NOMBRE DEL DOCUMENTO]" en la sección "[SECCIÓN ESPECÍFICA]", ¿Es cierto?]

**IMPORTANTE**: 
- El "[TEXTO LITERAL COMPLETO CON CONTEXTO]" debe ser una copia exacta, palabra por palabra, de lo que aparece en el documento original
- DEBE incluir todo el contexto necesario para que la pregunta pueda ser respondida completamente
- Si un hecho requiere información contextual para ser comprensible, INCLUYE esa información en la extracción literal
- SOLO incluye hechos que sean CRÍTICOS para la resolución del caso

## [CRITERIOS DE VALIDACIÓN JURÍDICA] - Validation Prompting aplicado

Cada pregunta generada DEBE cumplir con estos criterios de relevancia jurídica:

**Criterios de Relevancia Procesal:**
- El hecho debe ser JURÍDICAMENTE RELEVANTE para probar elementos de la causa de pedir
- El hecho debe tener VALOR PROBATORIO para sustentar las pretensiones
- El hecho debe ser susceptible de CONTROVERSIA procesal
- El hecho debe ser INDISPENSABLE para la resolución del caso

**Criterios de Calidad Técnica:**
- Extraer UN hecho específico usando el TEXTO LITERAL del documento CON TODO SU CONTEXTO
- INCLUIR toda la información contextual necesaria para que el hecho sea verificable
- ASEGURAR que la pregunta pueda ser respondida completamente con la información proporcionada
- NO parafrasear, reformular o interpretar el texto original
- Seguir EXACTAMENTE el formato proporcionado
- Referenciar el documento y sección específica donde aparece el texto
- Permitir respuesta: "Es cierto" / "No es cierto" / "No se tiene el conocimiento necesario"
- Cubrir TODOS los hechos JURÍDICAMENTE RELEVANTES encontrados en la demanda

## [RESTRICCIONES CRÍTICAS]
- NO preguntar por documentos faltantes
- NO solicitar clarificaciones adicionales
- NO generar preguntas abiertas
- NO parafrasear ni interpretar el texto
- NO hacer inferencias o deducciones
- SOLO extraer hechos usando el TEXTO LITERAL que aparece en la demanda
- COPIAR EXACTAMENTE las frases como están escritas en el documento
- INCLUIR TODO EL CONTEXTO necesario para que cada hecho sea comprensible y verificable
- EXTRAER porciones de texto suficientemente amplias para mantener el contexto completo

## [TIPOS DE HECHOS JURÍDICAMENTE RELEVANTES A IDENTIFICAR]

**Hechos Constitutivos (Elementos de la Causa de Pedir):**
- **Hechos de Identificación**: Nombres completos, números de identificación, cargos, representaciones legales que establezcan legitimación
- **Hechos de Existencia Jurídica**: Contratos, acuerdos, obligaciones que fundamenten las pretensiones
- **Hechos de Configuración**: Elementos que configuren incumplimiento, responsabilidad o violación de derechos

**Hechos Probatorios (Valor Probatorio Alto):**
- **Hechos de Acción**: Acciones específicas realizadas, firmadas, ejecutadas con fechas, horas y lugares precisos que prueben incumplimientos
- **Hechos Económicos**: Montos exactos (en números y letras), períodos de facturación, conceptos específicos que determinen cuantía
- **Hechos de Consecuencias**: Perjuicios causados, sobrecostos, retrasos, daños directos e indirectos que establezcan nexo causal

**Hechos Controvertibles (Susceptibles de Debate Procesal):**
- **Hechos de Incumplimiento**: Obligaciones no cumplidas, especificaciones técnicas, plazos vencidos, cláusulas violadas
- **Hechos Procedimentales**: Comunicaciones, requerimientos, plazos, radicados, respuestas o falta de respuestas que establezcan mora o incumplimiento
- **Hechos de Competencia**: Elementos que determinen competencia territorial, cuantía o especialidad

## [OUTPUT REQUERIDO] - Template Prompting aplicado

Genera ÚNICAMENTE este JSON:

```json
{{
     "hechos_extraidos": [
     "Texto literal exacto con contexto completo copiado del documento - Hecho 1",
     "Texto literal exacto con contexto completo copiado del documento - Hecho 2", 
     "Texto literal exacto con contexto completo copiado del documento - Hecho N"
   ],
  "preguntas_confirmacion": [
         {{
       "id": "H1",
       "hecho": "Texto literal exacto con contexto completo copiado del documento",
       "documento": "Nombre del documento",
       "seccion": "Sección específica donde aparece el texto",
       "pregunta": "[El hecho 'TEXTO LITERAL COMPLETO CON CONTEXTO' referenciado en el documento 'NOMBRE' en la sección 'SECCIÓN', ¿Es cierto?]"
     }}
    ],
    "validacion": {{
      "todos_los_hechos_extraidos": true,
      "formato_correcto": true,
      "preguntas_binarias": true
    }}
  }}
```

**EJECUTAR EXTRACCIÓN AHORA**
"""
    return prompt



def extract_json_from_llm_output(response_text: str) -> Dict[str, Any]:
    """
    Extracts the JSON object from the LLM's raw text response.
    Handles both markdown code blocks and plain JSON.

    Parameters:
    response_text (str): Full raw output from Gemini.

    Returns:
    Dict[str, Any]: Parsed JSON dictionary.
    """

    print("Response text: ", response_text)

    # First, try to find JSON within markdown code blocks
    import re

    # Look for JSON within ```json ... ``` blocks
    json_pattern = r'```json\s*(\{.*?\})\s*```'
    json_match = re.search(json_pattern, response_text, re.DOTALL)

    if json_match:
        json_content = json_match.group(1).strip()
        try:
            return json.loads(json_content)
        except json.JSONDecodeError as e:
            print(f"Error parsing JSON from markdown block: {e}")

    # Fallback: look for any JSON block (original method, but improved)
    json_start = response_text.rfind('{')
    if json_start == -1:
        raise ValueError("No JSON block found in model output.")

    # Find the matching closing brace
    brace_count = 0
    json_end = json_start

    for i, char in enumerate(response_text[json_start:], start=json_start):
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                json_end = i + 1
                break

    if brace_count != 0:
        raise ValueError("Unmatched braces in JSON block.")

    possible_json = response_text[json_start:json_end].strip()

    try:
        return json.loads(possible_json)
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON: {e}")
        print(f"Attempted to parse: {possible_json[:200]}...")
        raise ValueError(f"Invalid JSON format in model output: {e}")


def generate_questions_from_payload(
    payload: Dict[str, Any],
    max_questions: int = 5
) -> Dict[str, Any]:
    """
    Generates fact extraction questions from legal documents.
    Focused on extracting specific facts and creating binary confirmation questions.

    Parameters:
    payload (Dict[str, Any]): Must include 'user_request', 'principal_doc', 'anexos', 'contexto'.
    max_questions (int): Number of fact-based questions to extract.

    Returns:
    Dict[str, Any]: Parsed JSON with extracted facts and binary confirmation questions.
    """
    user_request = payload.get("user_request", "")
    principal_doc = payload.get("principal_doc", "")
    anexos = payload.get("anexos", [])
    contexto = payload.get("contexto", [])

    prompt = build_legal_prompt(
        user_request=user_request,
        principal_doc=principal_doc,
        anexos=anexos,
        contexto=contexto,
        max_questions=max_questions
    )

    model = genai.GenerativeModel("gemini-2.5-flash-lite-preview-06-17")
    response = model.generate_content(
        prompt,
        generation_config=genai.types.GenerationConfig(
            temperature=0.1  # Baja temperatura para mayor precisión en extracción de hechos
        )
    )

    return extract_json_from_llm_output(response.text.strip()) 