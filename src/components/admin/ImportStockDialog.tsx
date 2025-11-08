import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload, FileSpreadsheet, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ImportStockDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ImportStockDialog = ({ open, onOpenChange }: ImportStockDialogProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Stock Imported",
      description: "Inventory has been successfully updated.",
    });
    onOpenChange(false);
  };

  const downloadTemplate = () => {
    toast({
      title: "Template Downloaded",
      description: "CSV template has been downloaded.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import Stock Update</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Upload a CSV file with columns: SKU, Quantity, Branch (optional)
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <Label>CSV File</Label>
            <div className="border-2 border-dashed rounded-lg p-8">
              <input type="file" accept=".csv" className="hidden" id="csv-upload" required />
              <label htmlFor="csv-upload" className="cursor-pointer">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Upload className="h-10 w-10" />
                  <p className="text-sm font-medium">Click to upload CSV</p>
                  <p className="text-xs">Max file size: 5MB</p>
                </div>
              </label>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={downloadTemplate}
          >
            <FileSpreadsheet className="h-4 w-4 mr-2" />
            Download CSV Template
          </Button>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Import Stock</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
