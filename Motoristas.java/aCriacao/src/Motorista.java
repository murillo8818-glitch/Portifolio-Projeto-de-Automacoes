import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class Motorista{

    ArrayList<Motorista> Lista = new ArrayList<>();
    //  vamos armazenar eles dentro desse Arrays

    String nome;
    String cpf;
    String rg;
    String data_nasc;

    public Motorista(String nome, String cpf, String rg, String data_nasc) {

        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.data_nasc = data_nasc;

    }
    //metodo de adicionar
    public void adnome() {
        Scanner leitor = new Scanner(System.in);
        String is;
        System.out.print("Qual o novo nome de? " + this.nome + " ");
        is = leitor.nextLine();
        this.nome = is;
        System.out.println("Novo nome e:"   /* adcionar o antigo nome */);
        System.out.println(this.nome);
        System.out.println(" ");

    }

    //metodo de adicionar
    public void adcpf() {
        Scanner leitor = new Scanner(System.in);
        String ia;
        System.out.print("Qual o novo CPF de? " + this.nome);
        ia = leitor.nextLine();
        this.cpf = ia;
        System.out.println(this.cpf + " CPF adicionado ao " + this.nome);
    }


    //metodo de adicionar
    public void adrg() {
        Scanner leitor = new Scanner(System.in);
        String ix;
        System.out.print("Qual o novo RG de? " + this.nome);
        ix = leitor.nextLine();
        this.rg = ix;
        System.out.println(this.rg + " RG adicionado ao " + this.nome);
    }

    //metodo de adicionar
    public void addata_nasc() {
        Scanner leitor = new Scanner(System.in);
        String iy;
        System.out.print("Qual a nova data de nascimento de? " + this.nome);
        iy = leitor.nextLine();
        this.data_nasc = iy;
        System.out.println(this.data_nasc + " Data de Nascimeto adicionada ao " + this.nome);
    }




    // APENAS ALTERANDO TODOS OS VALORES DO MOTORISTA
    //PAR CRIAR UM MOTORISTA NOVO O MELHOR CAMINHO E:]
    // CRIAÇÃO DE UM NOVO OBJETO [MOTORISTA]
    void adicionar() {

        Scanner leitor = new Scanner(System.in);



        String aa = this.nome;
        String bb = this.cpf;
        String cc = this.rg;
        String dd = this.data_nasc;

        System.out.println("Qual o nome do motorista?");
        aa = leitor.nextLine();
        this.nome = aa;
        System.out.println(this.nome);

        System.out.println("Qual o CPF do motorista?");
        bb = leitor.nextLine();
        this.cpf = bb;
        System.out.println(this.cpf);

        System.out.println("Qual o RG do motorista?");
        cc = leitor.nextLine();
        this.rg = cc;
        System.out.println(this.rg);

        System.out.println("Qual a Data De Nascimento do motorista?");
        dd = leitor.nextLine();
        this.data_nasc = dd;
        System.out.println(this.data_nasc);

        System.out.println("nome do motorista: " +this.nome);
        System.out.println("CPF do motorista: " +this.cpf);
        System.out.println("RG do motorista: " +this.rg);
        System.out.println("Data De Nascimento do motorista: " +this.data_nasc);

        Lista.add(new Motorista(aa, bb, cc, dd));
        System.out.println(Lista.get(0).nome);
    }

}






