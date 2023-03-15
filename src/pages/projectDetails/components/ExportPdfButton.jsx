import React, { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { BsBoxArrowUp } from "react-icons/bs";


const ExportPDFButton = ({ project }) => {

    const [loading, setLoading] = useState(false);


    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const handleExportPDF = () => {
        setLoading(true);

        const docDefinition = {
            footer: function (currentPage, pageCount) {
                return;
            },
            header: function (currentPage, pageCount, pageSize) {
                return [
                    {
                        text: " Page " + currentPage + " / " + pageCount,
                        alignment: currentPage % 2 ? "left" : "right",
                        fontSize: 9,
                        bold: true,
                    },
                    {
                        canvas: [
                            {
                                type: "rect",
                                x: 170,
                                y: 32,
                                w: pageSize.width - 170,
                                h: 40,
                                width: 90,
                            },
                        ],
                    },
                ];
            },

            content: [

                {
                    stack: [project.project_title],
                    style: "title",
                },

                { text: "Información de Proyecto", style: "header" },
                { text: "Ubicación:", style: "label" },
                { text: project.project_location, style: "value" },

                { text: "Duración:", style: "label" },
                { text: project.project_duration, style: "value" },
                { text: "Presupuesto:", style: "label" },
                { text: project.project_budget, style: "value" },
                { text: "Avance del proyecto:", style: "label" },
                { text: project.project_percentage + "%", style: "value" },

                { text: "Beneficiarios / población diana", style: "label" },
                { text: project.beneficiaries, style: "value" },
                { text: "Resumen ejecutivo", style: "label" },
                { text: project.executive_summary, style: "value" },
                {
                    text: "Alineación del proyecto con políticas públicas y prioridades locales, regionales, estatales y/o Internacionales",
                    style: "label",
                },
                { text: project.alignment, style: "value" },

                { text: "Objetivos", style: "label" },
                { text: project.methodology_summary, style: "value" },
                { text: "Objetivo General", style: "label" },
                { text: project.general_objetive, style: "value" },
                { text: "Objetivo Específicos", style: "label" },
                {
                    ul: project.specific_objectives.map((item) => {
                        return `${item}`;
                    }),
                },

                { text: 'Resultados', style: 'subheader' },
                {
                    table: {
                        widths: ['*', '*'],
                        body: [
                            ['Resultado', 'Porcentaje'],
                            ...project.results.map((result) => [
                                result.result,
                                result.percentage
                            ])
                        ]
                    }
                },
                { text: 'Actividades', style: 'subheader' },
                {
                    table: {
                        widths: ['*', '*'],
                        body: [
                            ['Descripción', 'Completado'],
                            ...project.results.flatMap((result) =>
                                result.activities.map((activity) => [
                                    activity.description,
                                    activity.completed ? 'Sí' : 'No'
                                ])
                            )
                        ]
                    }
                },


                // {
                //     table: {
                //         widths: [200, '*', '*'],
                //         body: [
                //             [
                //                 { text: 'Actividades', style: 'subheader' },
                //                 { text: 'Completa', style: 'subheader' },
                //             ],
                //             ...project.results.map((result) => {
                //                 return [
                //                     { text: result.result },
                //                     { text: result.percentage },
                //                     {
                //                         ul: result.indicators.map((indicator) => {
                //                             return { text: indicator };
                //                         }),
                //                     },
                //                 ];
                //             }),
                //         ],
                //     },
                //     layout: {
                //         fillColor: function (i, node) {
                //             return i % 2 === 0 ? '#CCCCCC' : null;
                //         },
                //     },
                // },


                // { text: 'Results:', style: 'header' },
                // {
                //     ul: project.results.map((result) => [
                //         { text: result.result, style: 'subheader' },
                //         { text: `Percentage: ${result.percentage}`, style: 'subheader' },
                //         {
                //             text: 'Indicators:',
                //             style: 'subheader',
                //             ul: result.indicators.map((indicator) => ({ text: indicator })),
                //         },
                //         {
                //             text: 'Activities:',
                //             style: 'subheader',
                //             ul: result.activities.map((activity) => ({ text: activity.description })),
                //         },
                //     ]),
                // },


                { text: "Experiencia y capacidad", style: "label" },
                { text: project.experience, style: "value" },

                {
                    text: "Identificación de elementos que aseguren la sostenibilidad económica, social y ambiental del Proyecto",
                    style: "label",
                },
                { text: project.sustainability, style: "value" },

                {
                    text: "Estrategia de salida al finalizar el proyecto",
                    style: "label",
                },
                { text: project.exit_strategy, style: "value" },
            ],
            styles: {
                header: {
                    fontSize: 15,
                    bold: true,
                    margin: [0, 0, 0, 10],
                },

                title: {
                    fontSize: 20,
                    bold: true,
                    alignment: "right",
                    margin: [0, 20, 0, 80],
                    color: "#760000",
                },

                label: {
                    fontSize: 12,
                    bold: true,
                    margin: [0, 10, 0, 10],
                },

                value: {
                    fontSize: 11,
                    margin: [0, 0, 0, 10],
                    alignment: "justify",
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 10, 0, 5]
                }
            },
        };

        pdfMake.createPdf(docDefinition).open();

        setLoading(false);
    };

    return (
        <button className="boton-export" onClick={handleExportPDF}>
            Exportar <BsBoxArrowUp className="icon-Export" />
        </button>
    );
}

export default ExportPDFButton;