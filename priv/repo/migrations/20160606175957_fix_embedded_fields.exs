defmodule Formic.Repo.Migrations.AddEmbeddedFields do
  use Ecto.Migration

  def change do
    alter table(:forms) do
      remove :fields
      add :fields, {:array, :map}, default: []
    end
  end
end
