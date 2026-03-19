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

         Motorista novos = new Motorista("a","b","c", "d");
         Lista.add(Jonas);
         Lista.add(novos);


         Motorista Andre = new Motorista("andre do grau", "157155122","56-8555","01/01 ac");
        Lista.add(Andre);
        Andre.adnome();


         System.out.println(Lista.get(0).nome +" "+ Lista.get(0).cpf);
         System.out.println(Lista.get(1).nome);
         System.out.println(Lista.get(2).nome);
         System.out.println(Lista.get(3).nome);
         System.out.println(Lista.get(4).nome);
         System.out.println(Lista.get(5).nome);



        }
     }

