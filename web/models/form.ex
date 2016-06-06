defmodule Formic.Form do
  use Formic.Web, :model

  schema "forms" do
    field :name, :string
    embeds_many :fields, Formic.Field
    timestamps
  end

  @required_fields ~w(name)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end

defmodule Formic.Field do
  use Ecto.Model

  embedded_schema do
    field :name
    field :type
  end
end
