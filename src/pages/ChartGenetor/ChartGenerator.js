import Input from "../../components/Input";
import Button from "../../components/Button";
import * as Styles from "./styles";
import AxisInputGroup from "../../components/AxisInputGroup";
import Select from "../../components/Select/Select";
import api from "../../services/api";
import { useState } from "react";

const ChartGenerator = () => {
  const [image, setImage] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const createPostableObject = (eventTarget) => {
    const chartConfiguration = {
      backgroundColor: "transparent",
      width: 500,
      height: 300,
      format: "png",
      chart: {
        type: eventTarget[10].value,
        data: {
          labels: [
            eventTarget[1].value,
            eventTarget[2].value,
            eventTarget[3].value,
            eventTarget[4].value,
          ],
          datasets: [
            {
              label: eventTarget[5].value,
              data: [
                eventTarget[6].value,
                eventTarget[7].value,
                eventTarget[8].value,
                eventTarget[9].value,
              ],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: eventTarget[0].value,
          },
        },
      },
    };

    return chartConfiguration;
  };

  const getChart = async (postableObject) => {
    try {
      const chartResponse = await api.post("chart", postableObject, {
        responseType: "blob",
      });
      const chartURL = URL.createObjectURL(chartResponse.data);
      setImage(chartURL);
    } catch {
      alert(
        "Estamos com problemas no nosso servidor, tente novamente em alguns minutos"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const postableObject = createPostableObject(event.target);
    setIsLoading(true);

    getChart(postableObject);
  };

  return (
    <>
      <Styles.GlobalTitle>Gerador de Gráficos</Styles.GlobalTitle>
      <Styles.Form onSubmit={handleSubmit}>
        <Styles.AxisTitle>Título</Styles.AxisTitle>
        <Input
          aria-label="Insira aqui o título desejado para o gráfico"
          placeholder="Insira aqui o título desejado para o gráfico"
        />
        <Styles.AxisTitle>Etiquetas</Styles.AxisTitle>
        <AxisInputGroup numberOfInputs={4} />
        <Styles.AxisTitle>Valores</Styles.AxisTitle>
        <Input
          aria-label="Insira aqui a legenda desejada"
          placeholder="Insira aqui a legenda desejada"
        />
        <AxisInputGroup type="number" numberOfInputs={4} />
        <Styles.AxisTitle>Tipo de gráfico</Styles.AxisTitle>
        <Select required name="select">
          <option value="bar">Barra</option>
          <option value="line">Linha</option>
          <option value="pie">Pizza</option>
        </Select>
        <Button type="submit" loading={isLoading}>
          GERAR GRÁFICO
        </Button>
      </Styles.Form>
      {image && <img src={image} alt="Resultado do gerador de gráficos" />}
    </>
  );
};

export default ChartGenerator;
