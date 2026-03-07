import java.util.Scanner;
import java.util.ArrayList;

public class Main {
    Scanner leitor = new Scanner(System.in);
    //String x = leitor.nextLine();

    //  vamos armazenar eles dentro desses Arrays
    ArrayList<Motorista> Lista = new ArrayList<>(50);
    //IDEX:    0    1     2    3


    void main(String[] args) {
        Lista.add(new Motorista("Murillo", "173.", "58-99", "01/07/2005"));
        Lista.add(new Motorista("Jaiane", "123.", "40-99", "03/06/2005"));
        Lista.add(new Motorista("Eliane", "869.", "41-99", "15/10/1977"));


        Motorista Jonas = new Motorista("jon", "123", "456", "10/01/1999");

        Motorista novos = new Motorista("teste-nome","teste-cpf","teste-rg", "teste-rgdata_nasc");
        Lista.add(Jonas);
        Lista.add(novos);


        Motorista Andre = new Motorista("Andre", "157155122","56-8555","01/01/1888");
        Lista.add(Andre);



//        System.out.println(Lista.get(0).nome +" "+ Lista.get(0).cpf);
//        System.out.println(Lista.get(1).nome);
//        System.out.println(Lista.get(2).nome);
//        System.out.println(Lista.get(3).nome);
//        System.out.println(Lista.get(4).nome);
//        System.out.println(Lista.get(5).nome);
        System.out.println(Lista.get(0).toString());

            for (int varIi = 0; varIi < Lista.size(); varIi ++) {
                // Vamos criar um loop para percorrer o array
                System.out.println(Lista.get(varIi).nome);
                System.out.println(Lista.get(varIi).cpf);
                System.out.println(Lista.get(varIi).rg);
                System.out.println(Lista.get(varIi).data_nasc);

                System.out.println("  ");

            }
        }


    }


