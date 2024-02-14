public  class Constructor {
 int id,passoutYear;
 String name, ContactNo , collegeName;
Constructor(String ContactNo, String collegeName, int passoutYear){
  this.ContactNo = ContactNo;
  this.collegeName = collegeName;
  this.passoutYear = passoutYear;

 }
Constructor(int id ,String name){
  this("6934590553","IIT Kanpur",2005);
  this.id = id;
  this.name = name;

}
public static void main(String[] args){
  Constructor s = new Constructor(101,"john");
  System.out.println("Printing the Student Information -- ");
  System.out.println("Name"+s.name+"id"+s.id+"Contact"+s.ContactNo+"College NAme: "+s.collegeName)

}
}
